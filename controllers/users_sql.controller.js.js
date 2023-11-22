const usersModel = require('../models/users_sql.model');

const getUser = async (req, res) => {
    let user;
        user = await usersModel.getUsersByEmail(req.query.email);//esto accede a user.models y llama a esa funcion allí
    
    res.status(200).json(user); // [] con los users encontradas
}

// Create User
const createUser = async (req, res) => {
    const newUser = req.body; // {username,email,image}
    console.log(newUser)
    if (newUser.password == newUser.password2) {
       const response = await usersModel.createUser(newUser); 
       res.status(201).json({
        "items_created": response,
        data: newUser
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