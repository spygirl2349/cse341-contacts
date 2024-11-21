const mongodb = require('../database/index');
const objectId = require('mongodb').ObjectId;

const controllers = {};

//GET
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

//POST 
controllers.createContact = async (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    const response = await mongodb.getDatabase().db('contacts').collection('contacts').insertOne(contact);

    //check response
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while adding the contact');
    }
}

//PUT
controllers.updateContact = async (req, res) => {
    const contactId = new objectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    const response = await mongodb.getDatabase().db('contacts').collection('contacts').replaceOne({ _id: contactId }, contact);

    //check response
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the contact');
    }
}

//DELETE
controllers.deleteContact = async (req, res) => {
    const contactId = new objectId(req.params.id);
    const response = await mongodb.getDatabase().db('contacts').collection('contacts').deleteOne({ _id: contactId });

    //check response
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the contact');
    }
}

module.exports = controllers;