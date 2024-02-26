const express = require('express');
const database = require('./mongo/connection')
const cors = require('cors');
const router = require('./routes/index');
const app = express();

database.on('error', (err) => {
    console.log(err)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
