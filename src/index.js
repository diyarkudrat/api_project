require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');


const app = express();
const router = express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const routes = require('./routes/index.js');

app.use('/api', routes(router));

app.listen(`${process.env.PORT}`, () => {
    console.log(`Server now listening at localhost:${process.env.PORT}`);
});

module.exports = app;
