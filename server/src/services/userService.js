import { poolRequest, closePool, sql } from '../urilis/dbConnect.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Add a new User
export const addUserServices = async (newUser) => {
    try {
        const result = await poolRequest()
            .input('UserID', sql.VarChar, newUser.UserID)
            .input('Email_address', sql.VarChar, newUser.Email_address)
            .input('First_name', sql.VarChar, newUser.First_name)
            .input('Last_name', sql.VarChar, newUser.Last_name)
            .input('Password', sql.VarChar, newUser.Password)

            .query("INSERT INTO tbl_Users ( UserID, Email_address, First_name, Last_name, Password, User_rank) VALUES( @Email_address, @First_name, @Last_name, @Password )");

        return result;
    } catch (error) {
        return error;
    }
}

// Login and generate token service
export const loginService = async (Email_address, Password) => {
    try {
        const userResult = await poolRequest()
            .input( 'Email_address', sql.VarChar, Email_address )
            .query( "select * from tbl_Users where Email_address = @Email_address" );
            const user = userResult.recordset[0];
        if (!user) {
            return { "error": 'User not found' };
        } else {
            if (!bcrypt.compareSync(Password, user.Password)) {
                return { "error": 'Wrong Credentials' };
            } else {
                let token = `JWT ${jwt.sign({
                    Email_address: user.Email_address,
                    First_name: user.First_name,
                    Last_name: user.Last_name,
                    UserID: user.UserID,
                    User_rank: user.User_rank
                },
                    `${process.env.JWT_SECRET}`,
                    { expiresIn: "48h" })}`;
                const { UserID, Last_name, First_name, Email_address, User_rank } = user;
                return { user: { UserID, Last_name, First_name, Email_address, User_rank }, token };
            }
        }
    } catch (error) {
        return { "error": error };
    }
}

// Update user details
export const updateUserService = async (UserID, updatedUserData) => {
    try {
        const result = await poolRequest()
            .input( 'UserID', sql.VarChar, UserID )
            .input( 'First_name', sql.VarChar, updatedUserData.First_name )
            .input( 'Last_name', sql.VarChar, updatedUserData.Last_name )
            .input( 'Email_address', sql.VarChar, updatedUserData.Email_address )
            .query( "UPDATE tbl_Users SET First_name = @First_name, Last_name = @Last_name, Email_address = @Email_address WHERE UserID = @UserID" );
        return result;
    } catch (error) {
        return error;
    }
}

// Fetch user entry
export const getUserByIdService = async (UserID) => {
    try {
        const result = await poolRequest()
            .input('UserID', sql.VarChar, UserID)
            .query("SELECT * FROM tbl_Users WHERE UserID = @UserID");
        return result.recordset;
    } catch (error) {
        return error;
    }
}

// Delete a user entry
export const deleteUserService = async (UserID) => {
    try {
        const result = await poolRequest()
            .input('UserID', sql.VarChar, UserID)
            .query("DELETE FROM tbl_Users WHERE UserID = @UserID");
        return result;
    } catch (error) {
        return error;
    }
}