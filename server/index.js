import express from 'express';
import bodyParser from 'body-parser';
import logger from './src/urilis/logger.js';
import dotenv from 'dotenv';
import cors from 'cors';

import userRouter from './src/routes/userRoutes.js';

dotenv.config();

const PORT = process.env.API_PORT || 3500;
const app = express();
var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use('/api', userRouter);

//routes
app.listen(PORT, () => {
    logger.info(`server running on http://localhost:${PORT} `);
})