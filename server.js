const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./database/index.js');
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', require('./routes/index.js'));


mongodb.initializeDb((error) => {
    if (error) {
        console.log('Error Database crashed');
    } else {
        console.log(`Database connected`)
        app.listen(port, () => {
            console.log(`Server running, here is the link: http://localhost:${port}`)
        })
    }

});
