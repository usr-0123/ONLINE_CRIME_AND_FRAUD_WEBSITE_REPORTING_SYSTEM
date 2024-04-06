import { v4 } from 'uuid'
import nodemailer from 'nodemailer'
import logger from '../urilis/logger.js'

import {
    sendNotFound,
    sendBadRequest,
    sendCreated,
    sendSuccess,
    sendDeleteSuccess,
    sendServerError
} from '../helpers/helperFunctions.js'

import {
    getCrimesService,
    getCrimeByIDService,
    deleteCrimeService,
    addCrimeService,
    updateCrimeService,
    getCrimeByUIDService,
    updateCrimeStatusService
} from '../services/crimeService.js'

import { crimeValidator } from '../validators/crimeValidators.js'

import { getUserByIdService } from '../services/userService.js'

import e, { response } from 'express'

export const getCrimes = async (req, res) => {
    try {
        const data = await getCrimesService()

        if ( data.length == 0 ) {
            sendNotFound(res, 'No crimes found')
        } else {
            return res.status(200).json(data)
        }
    } catch (error) {
        sendServerError(res, error)
    }
}

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

export const getCrimeByUID = async (req, res) => {
    try {
        const UserID = req.params.UserID;
        const Crime = await getCrimeByUIDService(UserID)
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

export const addCrime = async (req, res) => {
    const { UserID, CrimeDate, CrimeTime, CrimeCategory, Involved_parties, Comment, Anonimity, FileUrl } = req.body;
    const {error} = crimeValidator({ CrimeDate, CrimeTime, CrimeCategory, Involved_parties, Comment, Anonimity, UserID, FileUrl });
    if (error) {
        return res.status(400).send(error.details[0].message)
    } else {
        try {
            const CrimeID = v4();
            const newCrime = { CrimeID, UserID, CrimeDate, CrimeTime, CrimeCategory, Involved_parties, Comment, Anonimity, FileUrl }
            const response = await addCrimeService(newCrime)

            if (response.message) {
                sendServerError(res, response.message)
            } else {
                const data = await getUserByIdService(UserID)
                const Email_address = data[0].Email_address
                const First_name = data[0].First_name
                const Last_name = data[0].Last_name
                
                await sendMail(
                    Email_address,
                    First_name,
                    Last_name,
                    CrimeID,
                    CrimeDate,
                    CrimeTime,
                    CrimeCategory,
                    Involved_parties,
                    Comment,
                    Anonimity
                    )
                
                sendCreated(res, "Crime entry created successfully")
            }
        } catch (error) {
            sendServerError(res, error.message);
        }
    }
}

// Email upon registration
export const sendMail = async (
    Email_address,
    First_name,
    Last_name,
    CrimeID,
    CrimeDate,
    CrimeTime,
    CrimeCategory,
    Involved_parties,
    Comment,
    Anonimity
    ) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
     
    const crimeEmailTemp = `
    <!DOCTYPE html>
    <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    <head>
        <title>CRIME ACKNOWLEDGEMENT</title>
    </head>
    <body>
        <p>Dear User ${First_name} ${Last_name},</p>
        <p>We have recieved your case and we are working on it to resolve it as fast as possible</p>
        <p>The sent crime with the details below has been recieved:</p>
        <p>Crime date: ${CrimeDate} at ${CrimeTime}</p>
        <p>Crime category: ${CrimeCategory}</p>
        <p>Involved parties reported are: ${Involved_parties}</p>
        <p>The comment delivered is: ${Comment}</p>
        <p>You anonimity is currently set to: ${Anonimity}</p>
        <p>You can track the stage of your case using the tracking number: ${CrimeID} </p>
    </body>
    </html>
  `;
     
    const mailOptions = {
      from: process.env.Email_address,
      to: Email_address,
      subject: "Crime report acknowledgement and tracking number",
      html: crimeEmailTemp,
    };
     
    try {
      logger.info("Sending mail....");
      await transporter.sendMail(mailOptions);
      logger.info("Email sent successfully!");
    } catch (error) {
      logger.error(error);
    }
    };

export const updateCrime = async (req, res) => {
    try {
        const CrimeID = req.params.CrimeID;

        const CrimeToUpdate = await getCrimeByIDService(CrimeID)

        if (CrimeToUpdate.length === 0) {
            sendNotFound(res, response.message)
        } else {

        const response = await updateCrimeService(CrimeID, req.body)

        if (response.error) {
            sendNotFound(res, "Crime not found or not updated")
        } else {
            return sendCreated(res, "Crime updated successfully")
        }
    }} catch (error) {
        sendServerError(res, error.message);
    }
}

export const updateCrimeStatus = async (req, res) => {
    try {
        const CrimeID = req.params.CrimeID;

        const CrimeToUpdate = await getCrimeByIDService(CrimeID)

        if (CrimeToUpdate.length === 0) {
            sendNotFound(res, response.message)
        } else {

            const { CrimeStatus } = req.body

        const response = await updateCrimeStatusService(CrimeID, CrimeStatus)

        if (response.error) {
            sendNotFound(res, "Crime not found or not updated")
        } else {
            return sendCreated(res, "Crime updated successfully")
        }
    }} catch (error) {
        sendServerError(res, error.message);
    }
}