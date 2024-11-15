const mongodb = require('../database/index');
const objectId = require('mongodb').ObjectId;

const controllers = {};

controllers.getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db('contacts').collection('contacts').find();
    result.toArray().then((data) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(data);
    });
};

controllers.getSingle = async (req, res) => {
    const contactId = new objectId(req.params.id);
    const result = await mongodb.getDatabase().db('contacts').collection('contacts').find({ _id: contactId });
    result.toArray().then((data) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(data[0]);
    });
};

module.exports = controllers;