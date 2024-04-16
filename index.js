const express = require('express');
const app = express();

// Definir el puerto
const port = 3000;

// Estaticos
app.use(express.static('public'));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});