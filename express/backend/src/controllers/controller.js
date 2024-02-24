const getHelloWorld = (_req, res) => {
  return res.status(200).json({"resposta" : "hello world"})
}

module.exports = {
  getHelloWorld
}
