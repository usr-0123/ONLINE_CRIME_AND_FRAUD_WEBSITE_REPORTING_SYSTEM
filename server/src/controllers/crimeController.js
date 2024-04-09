import { v4 } from 'uuid'
import nodemailer from 'nodemailer'
import logger from '../urilis/logger.js'

import { sendNotFound, sendBadRequest, sendCreated, sendSuccess, sendDeleteSuccess, sendServerError } from '../helpers/helperFunctions.js'

import { getCrimesService, getCrimeByIDService, deleteCrimeService, addCrimeService, updateCrimeService, getCrimeByUIDService, updateCrimeStatusService, updateReplyService } from '../services/crimeService.js'

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
                
                await sendRegistrationMail( Email_address, First_name, Last_name, CrimeID, CrimeDate, CrimeTime, CrimeCategory, Involved_parties, Comment, Anonimity )
                
                sendCreated(res, "Crime entry created successfully")
            }
        } catch (error) {
            sendServerError(res, error.message);
        }
    }
}

// Email upon registration
export const sendRegistrationMail = async ( Email_address, First_name, Last_name, CrimeID, CrimeDate, CrimeTime, CrimeCategory, Involved_parties, Comment, Anonimity ) => {
    
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
     
    const crimeEmailTemp = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CRIME ACKNOWLEDGEMENT</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                padding: 20px;
                max-width: 600px;
                margin: 0 auto;
            }
            h1, h2, p {
                margin-bottom: 10px;
            }
            .container {
                background: #f9f9f9;
                padding: 20px;
                border-radius: 5px;
            }
            .details {
                margin-top: 20px;
            }
            .details p {
                margin-bottom: 5px;
            }
            .footer {
                margin-top: 20px;
                font-size: 14px;
            }
        </style>
    </head>

    <body>
        <div class="container">
            <h1>Dear ${First_name} ${Last_name},</h1>
            <p>We have received your crime report and are actively working on resolving it as quickly as possible.</p>
        
            <div class="details">
                <h2>Crime Details:</h2>
                <p><strong>Crime Date:</strong> ${CrimeDate} at ${CrimeTime}</p>
                <p><strong>Crime Category:</strong> ${CrimeCategory}</p>
                <p><strong>Involved Parties:</strong> ${Involved_parties}</p>
                <p><strong>Comment:</strong> ${Comment}</p>
                <p><strong>Anonymity:</strong> ${Anonimity}</p>
                <p><strong>Tracking Number:</strong> ${CrimeID}</p>
            </div>

            <div class="footer">
                <p>You can track the progress of your case using the provided tracking number. For any inquiries or updates, feel free to contact us.</p>
                <p>Thank you for your cooperation.</p>
            </div>
        </div>
    </body>
    </html>
  `;
     
    const mailOptions = {
      from: process.env.EMAIL,
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

export const updateReply = async (req, res) => {
    try {
        const CrimeID = req.params.CrimeID;
        const CrimeToReply = await getCrimeByIDService(CrimeID);
        const user_id = CrimeToReply[0].UserID
        const { CrimeDate, CrimeTime, CrimeCategory, Involved_parties, Comment, Anonimity, FileUrl, CrimeStatus } = CrimeToReply[0];

        if (CrimeToReply.length === 0) {
            sendNotFound(res, response.message)
        } else {
            const {Reply} = req.body;

            const response = await updateReplyService(CrimeID, Reply)

            if (response.error) {
                sendNotFound(res, "Crime not found or not replied")
            } else {
                const data = await getUserByIdService(user_id)
                const Email_address = data[0].Email_address;

                await sendReplyMail( Email_address, CrimeID, CrimeDate, CrimeTime, CrimeCategory, Involved_parties, Comment, Anonimity, FileUrl, CrimeStatus, Reply )
                    
                return sendCreated(res, "Reply sent successfully!")
            }
        }
    } catch (error) {
        sendServerError(res, error.message)
    }
}

// Email upon registration
export const sendReplyMail = async ( Email_address, CrimeID, CrimeDate, CrimeTime, CrimeCategory, Involved_parties, Comment, Anonimity, FileUrl, CrimeStatus, Reply ) => {
    
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
     
    const replyEmailTemp = `
    <!DOCTYPE html>
    <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Crime Acknowledgement</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                    color: #333;
                }
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 20px;
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                }
                h2 {
                    color: #007bff;
                }
                p {
                    margin-bottom: 10px;
                }
                img {
                    max-width: 100%;
                    height: auto;
                    margin-top: 20px;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <h2>Crime Acknowledgement and Reply</h2>
                <p>Dear User,</p>
                <p>This email is sent to you as a reply to your crime report (ID: ${CrimeID}).</p>
                <p>We have reviewed your crime report dated ${CrimeDate} at ${CrimeTime}.</p>
                <p>The reported crime details:</p>
                <ul>
                    <li>Crime Category: ${CrimeCategory}</li>
                    <li>Involved Parties: ${Involved_parties}</li>
                    <li>Comment: ${Comment}</li>
                    <li>Anonymity: ${Anonimity}</li>
                    <li>Current Progress: ${CrimeStatus}</li>
                </ul>
                <p>You can always track the stage of your case using the tracking number: ${CrimeID}.</p>
                <img src="${FileUrl}" alt="Attachment">
                <hr>
                <p>We are sending you this email in response to your case. Here's our reply:</p>
                <blockquote>${Reply}</blockquote>
            </div>
        </body>

    </html>`;
     
    const mailOptions = {
      from: process.env.EMAIL,
      to: Email_address,
      subject: `Reply to crime ${CrimeID}`,
      html: replyEmailTemp,
    };
     
    try {
      logger.info("Sending mail....");
      await transporter.sendMail(mailOptions)
      logger.info("Email sent successfully!");
    } catch (error) {
      logger.error(error);
    }
};