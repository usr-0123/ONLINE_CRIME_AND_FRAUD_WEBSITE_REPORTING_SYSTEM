import { v4 } from 'uuid'
import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer'
import logger from '../urilis/logger.js'

import {
    userValidator,
    userLoginValidator,
    updateUserValidator
} from '../validators/userValidators.js';

import {
    addUserServices,
    loginService,
    getUserByIdService,
    deleteUserService,
    updateUserService
} from '../services/userService.js';

import {
    sendServerError,
    sendCreated,
    sendDeleteSuccess,
    sendNotFound
} from '../helpers/helperFunctions.js';

const checkUser = async (req) => {
    const UserID = req.params.UserID;
    const user = await getUserByIdService(UserID);
        if (user.length == 0 || user.message) {
           return false;
        } else {
            return true;
        }
}

export const registerUser = async (req, res) => {
    const { Email_address, First_name, Last_name, Password } = req.body;
    const { error } = userValidator(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            const UserID = v4();
            const hashedPassword = await bcrypt.hash(Password, 8);
            const newUser = { UserID, Email_address, First_name, Last_name, Password: hashedPassword };

            console.log("Logged the new user details", newUser);
            const response = await addUserServices(newUser);
            if (response.message) {
                sendServerError(res, response.message);
            } else {
                await sendMail( Email_address, First_name, Last_name )
                sendCreated(res, 'User created successfully');
            }
        } catch (error) {
            sendServerError(res, response.message);
        }
    }
}

// Email upon registration
export const sendMail = async (Email_address, First_name, Last_name ) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.Email,
        pass: process.env.Password,
      },
    });
     
    // Generate HTML string for the email content
    const emailTemp = `
    <!DOCTYPE html>
    <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    <head>
        <title>THANK YOU FOR REGISTERING TO ONLINE REPORTING SYSTEM!</title>
    </head>
    <body>
        <p>Dear ${First_name} ${Last_name},</p>
        <p>We're excited to have you as a member!</p>
        <p>Report any of the online issues that you encounter, to us anytime and get a confirmation email for your report with a reference number to track the progress</p>
    </body>
    </html>
  `;
     
    const mailOptions = {
      from: process.env.Email_address,
      to: Email_address,
      subject: "Thank you for registering to the Online Reporting System",
      html: emailTemp,
    };
     
    try {
      logger.info("Sending mail....");
      await transporter.sendMail(mailOptions);
      logger.info("Email sent successfully!");
    } catch (error) {
      logger.error(error);
    }
    };

export const loginUser = async (req, res) => {
    try {
        const { Email_address, Password } = req.body;
        const { error } = userLoginValidator(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        const user = await loginService( Email_address, Password );
        console.log("Logged user",user);
        if (user.error) {
            return res.status(400).send(user.error);
        } else {
            return res.status(200).json(user);
        }
    } catch (error) {
        sendServerError(res, response.message);
    }
}

export const getUserById = async (req, res) => {
    try {
        const UserID = req.params.UserID;
        const user = await getUserByIdService(UserID);
        if (user.length == 0) {
            return res.status(404).send('User not found');
        }
        const { password, ...rest } = user[0];
        res.status(200).json(rest);
    } catch (error) {
        sendServerError(res, response.message);
    }
}

export const deleteUser = async (req, res) => {
    try {
        const UserID = req.params.UserID;
        if (await checkUser(req)) {
            const result = await deleteUserService( req.params.UserID );
            if (result.message) {
                return res.status(500).send({ "error": result.message });
            } else {
                return sendDeleteSuccess(res, 'User deleted successfully');
            }
        } else {
            return sendNotFound(res, 'User not found');
        }

    } catch (error) {
        sendServerError(res, error.message);
    }
}

export const updateUser = async (req, res) => {
    try {
        const UserID = req.params.UserID;
        const { error } = updateUserValidator(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        } else {
            if (await checkUser(req)) {
                const { First_name, Last_name, Email_address, password } = req.body;

                // console.log("logged req.body", req.body);
                
                const updatedUserData = { First_name, Last_name, Email_address, password };

                const updateResult = await updateUserService(UserID, updatedUserData);

                // console.log("Logged updateResult", updateResult);
                
                if (updateResult.message) {
                    return res.status(500).send({ "error": updateResult.message });
                } else {
                    res.status(200).json({ "message": "User updated successfully" });
                }
            } else {
                return sendNotFound(res, 'User not found');
            }
            
        }
       
    } catch (error) {
        sendServerError(res, response.message);
    }
}
