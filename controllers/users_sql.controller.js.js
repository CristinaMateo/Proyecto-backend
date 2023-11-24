const usersModel = require('../models/users_sql.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const isAdmin = require("./isAdmin"); 

/** 
* @author Antonio Mangado & Cristina Mateo
* @method getUser 
* @async
* @param req - email,password
* @param res - the response renders a different pug file depending if the logged email has a user or admin role. Email is checked by using cookies.
* @exports getUser
*/
// Read User
const getUser = async (req, res) => {
    const { email, password } = req.body
    console.log(req.body)
    if (!email || !password) {
        res.status(400).send("Please provide an email or password to log in!")
    } else {
        let user = await usersModel.getUsersByEmail(email);//esto accede a user.models y llama a esa funcion allí
        
        const hashPassword = user[0].password
        if(user.length = 0){
            res.status(400).json({ msg: 'Incorrect user or password'}); 
        }else{
            const match = await bcrypt.compare(password, hashPassword);
            if(match){
                const data = await usersModel.loginUser(email)
                const userForToken = {
                    email: data.email,
                    username: data.username,
                };
                const token = jwt.sign(userForToken, process.env.CLIENT_SECRET, {expiresIn: '60m'});

                //Almacenamos el token en las cookies
                res.cookie("access-token", token, {
                    httpOnly: true,
                    sameSite: "strict",
                })
                res.cookie("logged-email", req.body.email,{
                    httpOnly: true,
                    sameSite: "strict",
                })
            
                if(isAdmin(req.body.email)){
                    res.redirect("/admin/search")
                } else{
                    res.render("dashboard");
                }
            } else {
                res.status(400).json({ msg: 'Incorrect user or password'});
            }
        }       
        // res.status(200).json(user); // [] con los users encontradas
    }
    
}

/** 
* @author Antonio Mangado & Cristina Meteo
* @method createUser
* @async
* @param req - username,email,image
* @param res - the response, in this case returns status(201) and redirects user to login site or (400) if sign up goes wrong.
* @exports createUser
*/
// Create User
const createUser = async (req, res) => {
    const newUser = req.body;
    if (newUser.password == newUser.password2) {
        const response = await usersModel.createUser(newUser); 
        const token = jwt.sign({email: newUser.email}, process.env.CLIENT_SECRET, {
            expiresIn: '60m'
        })
        res.status(201).redirect("/");
    } else {
        res.status(400).json({
            msg: "The passwords do not match"
        }) 
    }
}

/** 
* @author Cristina Mateo
* @method deleteUser  
* @async
* @param req - email
* @param res - the response, in this case returns status(201) and deletes the current user.
* @exports deleteUser
*/
//DELETE
const deleteUser = async (req, res) => {
    const deleteUser = req.body;
    const response = await usersModel.deleteUser(deleteUser);
    res.status(201).json({
        "items_deleted": response,
        data: deleteUser
    });
}

module.exports = {
    getUser,
    createUser,
    deleteUser
}