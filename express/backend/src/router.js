const express = require('express');
const controller = require('./controllers/controller');
const middleware = require('./middlewares/middleware');

const router = express.Router()

router.get("/helloworld", controller.getHelloWorld);
router.get("/person", controller.getAllPersons);
router.get('/person/:id', controller.getPersonByID);
router.post("/person", controller.postNewPerson);
router.patch("/person/:id", controller.patchPersonByID);

module.exports = router
