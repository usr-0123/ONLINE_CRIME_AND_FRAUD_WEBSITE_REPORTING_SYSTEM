import { Router } from "express";

import {
    addCrime,
    getCrimes,
    getCrimeByID,
    getCrimeByUID,
    updateCrime,
    deleteCrime
} from "../controllers/crimeController.js";

const crimeRouter = Router();

crimeRouter.post('/crime/add', addCrime);
crimeRouter.get('/crimes', getCrimes);
crimeRouter.get('/crime/:CrimeID', getCrimeByID);

crimeRouter.get('/crime/fetchByUID/:UserID', getCrimeByUID);

crimeRouter.put('/crime/update/:CrimeID', updateCrime);
crimeRouter.delete('/crime/delete/:CrimeID', deleteCrime);

export default crimeRouter;