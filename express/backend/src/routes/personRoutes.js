const express = require('express');
const router = express.Router();
// const middleware = require('../middlewares/middleware');

const controller = require('../controllers/personController');

router.get("/", controller.getAllPersons);
router.get('/:id', controller.getPersonByID);
router.post("/", controller.postNewPerson);
router.patch("/:id", controller.patchPersonByID);
router.delete("/:id", controller.deletePersonByID);
router.put("/:id", controller.putPersonByID);

module.exports = router;
