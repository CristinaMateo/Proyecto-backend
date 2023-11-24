/** 
* @author Antonio Mangado
* @method validateEmail - validates email
* @param req - email
* @return {boolean} - true or false
* @exports validateEmail
*/
const validateEmail = (email) => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regexEmail.test(email.toLowerCase())
};

/** 
* @author Antonio Mangado
* @method validatePassword - validates password
* @param req - password
* @return {boolean} - true or false
* @exports validatePassword
*/
// Must contain lowercase, uppercase, number, special character and more than 8 characters => Hol@1234
const validatePassword = (password) => {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\_\-])(?=.{8,})/
    return regexPassword.test(password)
};

const regex = {
    validateEmail,
    validatePassword
};

module.exports = regex;