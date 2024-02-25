const Model = require('../models/model');

const getHelloWorld = (_req, res) => {
  return res.status(200).json({"resposta" : "hello world"})
}

const postNewPerson = async (req, res) => {
  const data = new Model({
          nome: req.body.nome,
          idade: req.body.idade
      })
  try {
          const dataToSave = await data.save();
          res.status(200).json(dataToSave)
      }
      catch (err) {
          res.status(400).json({message: err.message})
      }
}

module.exports = {
  getHelloWorld,
  postNewPerson
}
