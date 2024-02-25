const roomusage = require("../models/roomusage")

module.exports = class bookingController{
    static async createBooking(req, res) {
        try {
            console.log(req.user);
            const { roomId, startTime, endTime, bookingDate, quoteUsed } = req.body
            if (!roomId || !startTime || !endTime || !bookingDate || !quoteUsed) throw new Error('required')

            await roomusage.create({...req.body, clientId : req.user.id})
            res.status(201).json({message : 'booking success'})
        } catch (error) {
            console.log(error);
            res.status(500).json({message : 'internal server error'})
        }
    }
}