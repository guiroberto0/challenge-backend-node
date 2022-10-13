const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connMongo = require('./src/database/conn.database.js');
//desafio dev
const routeQuery = require('./src/routes/articles.routes.js');

//route thi.code youtube
const routeUsers = require('./src/routes/users.routes.js');

connMongo();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1/articles', routeQuery);
app.use(`/api/v1/user`, routeUsers);

app.use((error, req, res, next)=>{
    return res.status(500).send({ msg: error })
})

module.exports = app