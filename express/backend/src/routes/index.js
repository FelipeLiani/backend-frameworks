const express = require('express');
const router = express.Router();
// const middleware = require('../middlewares/middleware');

router.use('/person', require('./personRoutes'));

module.exports = router;
