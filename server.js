const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const mongoClient = require('mongodb');
const mongodb = require('./database/index.js');

app.use('/', require('./routes/index.js'));


mongodb.initializeDb((error, mongodb) => {
    if (error) {
        console.log('Error Database crashed');
    } else {
        console.log(`Database connected`)
        app.listen(port, () => {
            console.log(`Server running, here is the link: http://localhost:${port}`)
        })
    }

});
