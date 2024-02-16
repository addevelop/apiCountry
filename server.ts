import express from "express";
import loggerMiddleware from "./middlewares/loggerMiddleware";
import dotenv from "dotenv";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { swaggerOptions } from "./swaggerOptions";

dotenv.config();
const app = express();
const specs = swaggerJSDoc(swaggerOptions);

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

/*******************/
/*** Les routes ****/

const information_router = require('./routes/information');


/*************************************/
/*** Mise en place des middlewares ***/

app.use(loggerMiddleware);

/********************************/
/*** Mise en place du routage ***/

app.use('/information', information_router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
    console.log(`Le server est en cours d'éxecution sur le port ${PORT}`);
})