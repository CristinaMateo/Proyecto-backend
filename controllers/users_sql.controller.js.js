const usersModel = require('../models/users_sql.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

// Read User
const getUser = async (req, res) => {
    const { email, password } = req.body
    console.log(req.body)
    if (!email || !password) {
        res.status(400).send("Please provide an email or password to log in!")
    } else {
        let user = await usersModel.getUsersByEmail(email);//esto accede a user.models y llama a esa funcion allí
        console.log({
            password: password,
            hashPassword: user[0].password
        })
        const hashPassword = user[0].password
        if(user.length = 0){
            res.status(400).json({ msg: 'Incorrect user or password'}); 
        }else{
            const match = await bcrypt.compare(password, hashPassword);
            // console.log(match)
            if(match){
                const data = await usersModel.loginUser(email)
                // console.log(data)
                const userForToken = {
                    email: data.email,
                    username: data.username,
                };
                console.log(userForToken)
                const token = jwt.sign(userForToken, process.env.CLIENT_SECRET, {expiresIn: '60m'});
                res
                .status(200)
                .json({
                    msg:'Correct authentication',
                    token: token});
            }else {
                res.status(400).json({ msg: 'Incorrect user or password'});
            }
        }       
        // res.status(200).json(user); // [] con los users encontradas
    }
    
}

// Create User
const createUser = async (req, res) => {
    const newUser = req.body; // {username,email,image}
    // console.log(newUser)
    if (newUser.password == newUser.password2) {
        const response = await usersModel.createUser(newUser); 

        const token = jwt.sign({email: newUser.email}, process.env.CLIENT_SECRET, {
            expiresIn: '60m'
        })

        res.status(201).json({
        "items_created": response,
        token, 
        data: {
            username: newUser.username,
            email: newUser.email
        }
        });
    } else {
        res.status(400).json({
            msg: "The passwords do not match"
        }) 
    }
}

//DELETE
const deleteUser = async (req, res) => {
    const deleteUser = req.body; // {email}
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