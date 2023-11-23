const jwt = require("jsonwebtoken")
const util = require("util")

const protect = async () => {
    // Read the token and check if it exists
    const testToken = req.headers.authorization
    let token;
    if (testToken && testToken.startsWith('bearer')) {
        token = testToken.split(' ')[1]
    }
    if (!token) {
        console.log("You are not logged in")
        next()
    }
    console.log(token)

    // Validate the token
    const decodedToken = util.promisify(jwt.verify)(token, process.env.CLIENT_SECRET)
    console.log(decodedToken)
    // Check if the user exists


    // Change if the password has been changed after the token was issued
    next()
}

module.exports = {
    protect
}
    