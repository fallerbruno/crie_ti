import { Request, Response } from 'express';
const votesModel = require('../models/Votes');

class voteController {
    index = async (req, res, next) => {
        const params = req.query;
        const limit = params.limit || 12;
        const page = params.page || 1;
        const offset = (page - 1) * limit;
        const sort = params.sort || 'id';
        const order = params.order || 'ASC';
        const where = {};
        const votes = await votesModel.findAll({
            where: where,
            limit: limit,
            offset: offset,
            order: [[sort, order]],
        })
        res.json(votes);
    }

    create = async (req, res, next) => {
        try {
           const  data = req.body
            const votes = await votesModel.create(data);
            res.json(votes);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}


module.exports = new voteController();

