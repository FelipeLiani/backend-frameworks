const express = require('express');
const controller = require('./controllers/controller');
const middleware = require('./middlewares/middleware');

const router = express.Router()

router.get("/helloworld", controller.getHelloWorld);

module.exports = router
