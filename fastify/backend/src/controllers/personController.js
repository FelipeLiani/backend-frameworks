const boom = require('boom');
const Person = require('../models/person');

exports.getPersons = async (_req, _res) => {
  try {
    const cars = await Person.find()
    return cars
  } catch (err) {
    throw boom.boomify(err)
  }
}
