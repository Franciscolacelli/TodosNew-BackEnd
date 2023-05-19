const Users = require('../models/users.model');


//CONTROLADOR PARA CREAR USUARIO 
const postUserCreate = async (req, res) => {
    try {
        const newUser = req.body;
        await Users.create(newUser);
        res.status(201).send();
    } catch (error) {
        res.status(400).json(error);
    }
    };

    

    module.exports = {
        postUserCreate,
        
    }