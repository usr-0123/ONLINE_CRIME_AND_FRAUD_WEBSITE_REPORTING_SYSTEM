import { Router } from "express";

import {
    addCrime,
    getCrimes,
    getCrimeByID,
    getCrimeByUID,
    updateCrime,
    deleteCrime,
    updateReply,
    updateCrimeStatus,
    contactUS
} from "../controllers/crimeController.js";

import { authMiddleware } from "../middlewares/userAuthMiddleware.js";

const crimeRouter = Router();

crimeRouter.post('/crime/add', addCrime);
crimeRouter.get('/crimes', getCrimes);
crimeRouter.get('/crime/:CrimeID', getCrimeByID);
crimeRouter.get('/crime/fetchByUID/:UserID', getCrimeByUID);
crimeRouter.put('/crime/update/:CrimeID', updateCrime);
crimeRouter.put('/crime/updateStatus/:CrimeID', updateCrimeStatus);
crimeRouter.put('/crime/reply/:CrimeID', updateReply);
crimeRouter.post('/crime/contactUs', contactUS);
crimeRouter.delete('/crime/delete/:CrimeID', deleteCrime);

export default crimeRouter;