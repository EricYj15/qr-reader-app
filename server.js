const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Servir arquivos estáticos da pasta raiz e da pasta web
app.use(express.static(path.join(__dirname)));
app.use('/web', express.static(path.join(__dirname, '../web')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`QR Reader App rodando em http://localhost:${PORT}`);
});
