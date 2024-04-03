import joi from 'joi'

export const crimeValidator = (crime) => {
    const crimeValidatorSchema = joi.object({
        CrimeDate: joi.string().required(),
        CrimeTime: joi.string().required(),
        CrimeCategory: joi.string().required(),
        Involved_parties: joi.string().required(),
        Comment: joi.string().required(),
        Anonimity: joi.string().required(),
        UserID: joi.string().required()
    })
    return crimeValidatorSchema.validate(crime)
}