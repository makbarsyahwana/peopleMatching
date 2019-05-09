const { check, param } = require('express-validator/check');

const checkValidation = [
    check('facebookID').exists().isLength({min: 1}).withMessage("facebook ID must be filled"),
    check('username').exists().isString().isLength({min: 1}).withMessage("username must be exist"),
    check('password').exists().isLength({min: 8}).withMessage("Password must be more than 8 character"),
    check('age').isNumeric().withMessage("age must be a number")
]

module.exports = checkValidation