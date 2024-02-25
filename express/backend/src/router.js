const express = require('express');
const controller = require('./controllers/controller');
const middleware = require('./middlewares/middleware');

const router = express.Router()

router.get("/helloworld", controller.getHelloWorld);
router.post("/newperson", controller.postNewPerson);

module.exports = router
