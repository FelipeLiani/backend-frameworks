const Model = require('../mongo/schemas/personSchema');

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

const deletePersonByID = async (req, res) => {
  try {
          const id = req.params.id;
          const data = await Model.findByIdAndDelete(id)
          res.send(`person ${data.nome} has been deleted..`)
      }
      catch (err) {
          res.status(400).json({ message: err.message })
      }
}

const putPersonByID = async (req, res) => {
  try {
          const id = req.params.id;
          const atualizacao = req.body;
          const options = { new: true };

          const result = await Model.findByIdAndUpdate(
            id, atualizacao, options
          );
          if (!result) {
                return res.status(404).json({ mensagem: 'Documento não encontrado.' });
              }
          res.json(result);

  } catch (err) {
          res.status(500).json({ mensagem: 'Erro ao atualizar documento.' });
          console.log(err)
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
