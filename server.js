const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authorRoutes = require('./routes/authorRoutes');
const postRoutes = require('./routes/postRoutes');
require('./models/index'); // Inicializa la conexión con la base de datos

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use(authorRoutes);
app.use(postRoutes);

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
 
