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
        .input("CrimeTime", sql.VarChar, crime.CrimeTime)
        .input("CrimeCategory", sql.VarChar, crime.CrimeCategory)
        .input("Involved_parties", sql.VarChar, crime.Involved_parties)
        .input("Comment", sql.VarChar, crime.Comment)
        .input("Anonimity", sql.VarChar, crime.Anonimity)
        .input("UserID", sql.VarChar, crime.UserID)
        .input("FileUrl", sql.VarChar, crime.FileUrl)
        .query("INSERT INTO Crime ( CrimeID,CrimeDate,CrimeTime,CrimeCategory,Involved_parties,Comment,Anonimity,UserID,FileUrl ) VALUES ( @CrimeID, @CrimeDate, @CrimeTime, @CrimeCategory, @Involved_parties, @Comment, @Anonimity, @UserID, @FileUrl)")
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
        .input("CrimeTime", sql.VarChar, crime.CrimeTime)
        .input("CrimeCategory", sql.VarChar, crime.CrimeCategory)
        .input("Involved_parties", sql.VarChar, crime.Involved_parties)
        .input("CrimeStatus", sql.VarChar, crime.CrimeStatus)
        .input("Comment", sql.VarChar, crime.Comment)
        .input("Anonimity", sql.VarChar, crime.Anonimity)
        .input("UserID", sql.VarChar, crime.UserID)
        .input("FileUrl", sql.VarChar, crime.FileUrl)
        .query("UPDATE Crime SET CrimeStatus = @CrimeStatus, CrimeDate = @CrimeDate, CrimeTime = @CrimeTime, CrimeCategory = @CrimeCategory, Involved_parties = @Involved_parties, Comment = @Comment, Anonimity = @Anonimity, FileUrl = @FileUrl WHERE CrimeID = @CrimeID")
        return result;

    } catch (error) {
        return error;
    }
}

export const updateCrimeStatusService = async (CrimeID, CrimeStatus) => {
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