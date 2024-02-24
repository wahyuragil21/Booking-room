const { comparePassword } = require("../helpers/bcrtypt")
const { getToken } = require("../helpers/jwt")
const clients = require("../models/clients")

module.exports = class clientController {
    static async createClient(req, res) {
        try {
            const { name, email, phone, credit } = req.body
            if (!name || !email || !phone || !credit) throw new Error('required')

            if (credit < 0) throw new Error('credit should be greater than 0')

            const client = await clients.findOne({ where: { email } })
            if(client) throw new Error('client already exists')

            const newClient = await clients.create(...req.body)
            res.status(201).json(newClient)
        } catch (error) {
            res.status(500).json({message : 'internal server error'})
        }
    }

    static async loginClient(req, res) {
        try {
            const { email, password } = req.body
            if (!email || !password) throw new Error('required')

            const client = await clients.findOne({ where: { email } })
            if(!client) throw new Error('client not found')

            const isMatch = comparePassword(password, client.password)
            if(!isMatch) throw new Error('wrong password')

            const accessToken = getToken({id : client.id})
            res.status(200).json({accessToken})
        }catch(error) {
            res.status(500).json({message : 'internal server error'})
        }
    }

}