const express = require('express');
const swaggerSpec = require('../config/swagger/swagger');
const swaggerUi = require('swagger-ui-express');

const app = express();

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
    console.log("serveur démarré ! ")
});