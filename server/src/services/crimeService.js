import { poolRequest, sql } from '../urilis/dbConnect.js'

export const getCrimesService = async () => {
    try {
        const result = await poolRequest()
        .query("SELECT * FROM Crime")
        return result.recordset;
    } catch (error) {
        return error.message;
    }
}

export const getCrimeByIDService = async (CrimeID) => {
    try {
        const result = await poolRequest()
        .input('CrimeID', sql.VarChar, CrimeID)
        .query("SELECT * FROM Crime WHERE CrimeID = @CrimeID")
        return result.recordset;
    } catch (error) {
        return error.message;
    }
}

export const getCrimeByUIDService = async (UserID) => {
    try {
        const result = await poolRequest()
        .input('UserID', sql.VarChar, UserID)
        .query("SELECT * FROM Crime WHERE UserID = @UserID")
        return result.recordset;
    } catch (error) {
        return error.message;
    }
}

export const deleteCrimeService = async (CrimeID) => {
    try {
        const result = await poolRequest()
        .input("CrimeID", sql.VarChar, CrimeID)
        .query("DELETE FROM Crime WHERE CrimeID = @CrimeID")
        return result;
    } catch (error) {
        return error;
    }
}

export const addCrimeService = async (crime) => {
    try {
        const result = await poolRequest()
        .input("CrimeID", sql.VarChar, crime.CrimeID)
        .input("CrimeDate", sql.VarChar, crime.CrimeDate)
        .input("CrimeCategory", sql.VarChar, crime.CrimeCategory)
        .input("Involved_parties", sql.VarChar, crime.Involved_parties)
        .input("Comment", sql.VarChar, crime.Comment)
        .input("Anonimity", sql.VarChar, crime.Anonimity)
        .input("UserID", sql.VarChar, crime.UserID)
        .query("INSERT INTO Crime ( CrimeID,CrimeDate,CrimeCategory,Involved_parties,Comment,Anonimity,UserID ) VALUES ( @CrimeID, @CrimeDate, @CrimeCategory, @Involved_parties, @Comment, @Anonimity, @UserID )")
        return result;
    } catch (error) {
        return error;
    }
}

export const updateCrimeService = async (CrimeID, crime) => {
    try {
        const result = await poolRequest()
        .input("CrimeID", sql.VarChar, CrimeID)
        .input("CrimeDate", sql.VarChar, crime.CrimeDate)
        .input("CrimeCategory", sql.VarChar, crime.CrimeCategory)
        .input("Involved_parties", sql.VarChar, crime.Involved_parties)
        .input("CrimeStatus", sql.VarChar, crime.CrimeStatus)
        .input("Comment", sql.VarChar, crime.Comment)
        .input("Anonimity", sql.VarChar, crime.Anonimity)
        .input("UserID", sql.VarChar, crime.UserID)
        .query("UPDATE Crime SET CrimeStatus = @CrimeStatus, CrimeDate = @CrimeDate, CrimeCategory = @CrimeCategory, Involved_parties = @Involved_parties, Comment = @Comment, Anonimity = @Anonimity WHERE CrimeID = @CrimeID")
        // console.log("Logged the result", crime.CrimeStatus);
        return result;

    } catch (error) {
        // console.log("Logged the error available in the update service", error);
        return error;
    }
}

// Update the crime status
export const updateCrimeStatusService = async (CrimeID, CrimeStatus) => {
    // console.log("Logged the crimeStatus that was passed as a prop", CrimeStatus);
    try {
        const result = await poolRequest()
        .input("CrimeID", sql.VarChar, CrimeID)
        .input("CrimeStatus", sql.VarChar, CrimeStatus)
        .query("UPDATE Crime SET CrimeStatus = @CrimeStatus WHERE CrimeID = @CrimeID")
        return result;

    } catch (error) {
        return error;
    }
}