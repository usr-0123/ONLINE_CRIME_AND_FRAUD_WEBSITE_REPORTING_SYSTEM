import { sendNotFound, sendBadRequest, sendCreated, sendSuccess, sendDeleteSuccess, sendServerError } from '../helpers/helperFunctions.js'

import { getCrimesService, getCrimeByIDService, deleteCrimeService, addCrimeService, updateCrimeService } from '../services/crimeService'

import { crimeValidator } from '../validators/crimeValidators.js'

import { getUserByIdService } from '../services/userService.js'

import e, { response } from 'express'

// export const getCrimes = async (req, res) => {
//     try {
//         const data = await getCrimesService()

//         if (data.length ===0 ) {
//             sendNotFound(res, 'No crimes found')
//         } else {
//             if (!req.query.page && !req.query.limit) {

//             }
//         }
//     } catch (error) {
//         sendServerError(res, error)
//     }
// }

export const getCrimeByID = async (req, res) => {
    try {
        const CrimeID = req.params.CrimeID;
        const Crime = await getCrimeByIDService(CrimeID)
        if (crimeValidator.length === 0) {
            sendNotFound(res, 'Crime not found');
        } else {
            res.status(200).json(Crime);
        }
    } catch (error) {
        sendServerError(res, error.message)
    }
}

export const deleteCrime = async (req, res) => {
    try {
        const CrimeID = req.params.CrimeID
        const CrimeToDelete = await getCrimeByIDService(CrimeID)
        if (CrimeToDelete.length === 0) {
            sendNotFound(res, response.message)
        } else {
            const response = await deleteCrimeService(CrimeID)
        if (response.message) {
            sendServerError(res, response.message)
        } else {
            sendDeleteSuccess(res, `Crime with id ${CrimeID} was deleted successfully`)
        }
    }
    } catch (error) {
        sendServerError(res, error.message)
    }
}