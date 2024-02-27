// Import our Controllers
const personController = require('../controllers/personController');

const routes = [
  {
    method: 'GET',
    url: '/person',
    handler: personController.getCars
  }
]

module.exports = routes
