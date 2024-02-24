const express = require('express');
const cors = require('cors');
const router = require('./router');
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
