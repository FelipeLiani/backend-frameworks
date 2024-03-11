const Person = require('../models/person');

const getAllPersons = async (_req, _res) => {
  try {
    const persons = await Person.find()
    return persons
  } catch (err) {
    throw new Error(err)
  }
}

const getPersonByID = async (_req, _res) => {
  try{
      const person = await Person.findById(req.params.id);
      return person
 } catch (err) {
      throw new Error(err)
 }
}

const postNewPerson = async (req, _res) => {
  const data = new Person ({
    nome: req.body.nome,
    idade: req.body.idade
  })
  try {
    const dataToSave = await data.save()
    return dataToSave
  } catch(err) {
    throw new Error(err)
  }
 }

const patchPersonByID = async (req, _res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Person.findByIdAndUpdate(id, updatedData, options)
    return result
  } catch(err) {
    throw new Error(err)
  }
}

const deletePersonByID = async (req, _res) => {
  try {
    const id = req.params.id;
    const data = await Person.findByIdAndDelete(id)
    const message = `person ${data.nome} has been deleted..`
    return message
  } catch(err) {
    throw new Error(err)
  }
}

const putPersonByID = async () => {
  try {
    const id = req.params.id;
    const atualizacao = req.body;
    const options = { new: true };

    const result = await Person.findByIdAndUpdate(
      id, atualizacao, options
    );
    if (!result) {
          throw new Error('Documento não encontrado.')
        }
    return result
  } catch(err) {
    throw new Error(err)
  }
}

module.exports = {
  getAllPersons,
  getPersonByID,
  postNewPerson,
  patchPersonByID,
  deletePersonByID,
  putPersonByID
}
