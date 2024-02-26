const Model = require('../models/model');

const getHelloWorld = (_req, res) => {
  return res.status(200).json({"resposta" : "hello world"})
}

const getAllPersons = async (_req, res) => {
  try {
      const data = await Model.find();
      res.json(data);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
}

const getPersonByID = async (req, res) => {
  try{
      const data = await Model.findById(req.params.id);
      res.json(data)
 } catch (err) {
      res.status(500).json({message: err.message})
 }
}

const postNewPerson = async (req, res) => {
  const data = new Model({
          nome: req.body.nome,
          idade: req.body.idade
      });
  try {
          const dataToSave = await data.save();
          res.status(200).json(dataToSave);
      } catch (err) {
          res.status(400).json({ message: err.message });
      }
}

const patchPersonByID = async (req, res) => {
  try {
          const id = req.params.id;
          const updatedData = req.body;
          const options = { new: true };

          const result = await Model.findByIdAndUpdate(
              id, updatedData, options
          )

          res.send(result)
      }
      catch (err) {
          res.status(400).json({ message: err.message })
      }
}

module.exports = {
  getHelloWorld,
  getAllPersons,
  getPersonByID,
  postNewPerson,
  patchPersonByID
}
