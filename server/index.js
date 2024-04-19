import express from 'express';
import bodyParser from 'body-parser';
import logger from './src/urilis/logger.js';
import dotenv from 'dotenv';
import cors from 'cors';

import userRouter from './src/routes/userRoutes.js';
import crimeRouter from './src/routes/crimeRoutes.js';
import evidenseRouter from './src/routes/evidenseRouter.js';

import rateLimitMiddleware from './src/middlewares/rateLimitMiddleware.js';

dotenv.config();

const PORT = process.env.API_PORT || 3500;
const app = express();
var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
// rateLimitMiddleware(app)

//public folder
app.use('/photos/crimes', express.static('src/photos/crimes'));

app.use('/api', userRouter);
app.use('/api', crimeRouter);
app.use('/api', evidenseRouter);

//routes
app.listen(PORT, () => {
    logger.info(`server running on http://localhost:${PORT} `);
})