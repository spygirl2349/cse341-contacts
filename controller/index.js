const mongodb = require('../database/index')

const controllers = {};

controllers.getAllCharacters = async (req, res, next) => {
    const result = await mongodb.getDatabase().db('contacts').collection('contacts').find();
    result.toArray().then((data) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(data);
    });
};


module.exports = controllers