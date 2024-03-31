import joi from 'joi';

export const userValidator = (user) => {
    const registeruserSchema = joi.object({
        First_name: joi.string().required(),
        Last_name: joi.string().required(),
        Email_address: joi.string().email().required(),
        Password: joi.string().min(4).required(),
    });
    return registeruserSchema.validate(user);
}

export const updateUserValidator = (user) => {
    const updateUserSchema = joi.object({
        First_name: joi.string(),
        Last_name: joi.string(),
        Email_address: joi.string().email(),
        Password: joi.string().min(4),
    });
    return updateUserSchema.validate(user);
}

export const userLoginValidator = (user) => {
    const userLoginValidatorSchema = joi.object({
        Email_address: joi.string().required(),
        Password: joi.string().min(4).required(),
    });
    return userLoginValidatorSchema.validate(user);
}