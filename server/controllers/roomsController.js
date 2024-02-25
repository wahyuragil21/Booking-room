const rooms = require("../models/rooms")

module.exports = class roomsController{
    
    static async createRoom(req, res) {
        try {
            const { roomName, costPerHour } = req.body
            if (!roomName || !costPerHour) throw new Error('required')
            
            const newRoom = await rooms.create({...req.body})
            res.status(201).json(newRoom)
        } catch (error) {
            res.status(500).json({message : 'internal server error'})
        }
    }
    static async getRooms(req, res) {
        try {
            const allRooms = await rooms.findAll()
            res.status(200).json(allRooms)
        } catch (error) {
            res.status(500).json({message : 'internal server error'})
        }
    }
}