const personController = require('../controllers/personController');

const routes = [
  {
    method: 'GET',
    url: '/person',
    handler: personController.getAllPersons
  },
  {
    method:'GET',
    url: '/person/:id',
    handler: personController.getPersonByID
  },
  {
    method: 'POST',
    url:'/person',
    handler: personController.postNewPerson
  },
  {
    method: 'PATCH',
    url: '/person/:id',
    handler: personController.patchPersonByID
  },
  {
    method: 'DELETE',
    url: '/person/:id',
    handler: personController.deletePersonByID
  },
  {
    method: 'PUT',
    url: '/person/:id',
    handler:personController.putPersonByID
  }
]

module.exports = routes
