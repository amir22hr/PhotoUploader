//defines
require('dotenv').config({
    path: 'variables.env',
})
const express = require('express');
const errorHandler = require('./helpers/handleErrors')
const router = require('./routes');

//configs
const app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'))

//MiddleWares
app.use('/', router)

//handleErrors
//404 : routes/index.js
//500
app.use(errorHandler.handlerServerError)

//listen
app.listen(process.env.PORT, () => {
    console.log(`server is running on http://localhost:${process.env.PORT}`);
}) 