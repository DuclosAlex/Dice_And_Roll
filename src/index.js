const express = require('express');
const swaggerSpec = require('../config/swagger/swagger');
const swaggerUi = require('swagger-ui-express');
const bodyparser = require('body-parser')
const { userRouter }= require('./router');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true}));
app.use("/user", userRouter);

app.listen(8000, () => {
    console.log("serveur démarré ! ")
});