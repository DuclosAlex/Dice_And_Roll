require('dotenv').config();
const express = require('express');
const swaggerSpec = require('../config/swagger/swagger');
const swaggerUi = require('swagger-ui-express');
const bodyparser = require('body-parser')
const { userRouter, characterRouter, statsRouter, skillRouter, authRouter } = require('./router');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const app = express();

const allowedOrigins = ['http://localhost:3000']; // Ajoutez ici les domaines que vous souhaitez autoriser

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Activez le partage des cookies entre les domaines
};

app.use(cors(corsOptions));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use(cookieParser())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true}));
app.use("/user", userRouter);
app.use("/character", characterRouter);
app.use("/stats", statsRouter);
app.use("/skill", skillRouter);
app.use("/auth", authRouter)

app.listen(8000, () => {
    console.log("serveur démarré ! ")
});