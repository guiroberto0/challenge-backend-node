const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routeQuery = require('./routes/routerQuery.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routeQuery);

app.use((error, req, res, next)=>{
    return res.status(500).send({ msg: error })
})

module.exports = app