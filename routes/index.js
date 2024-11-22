const router = require('express').Router();
const controller = require('../controller/index');



router.get('/', (req, res) => {
    res.send('Hello World')
});

//go to '/contacts' and find routes in the contacts.js file
router.use('/contacts', require('./contacts'));
router.use('/api-docs', require('./swag-route'));

module.exports = router; 