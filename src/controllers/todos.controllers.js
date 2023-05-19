const Todos = require('../models/todos.model');
const Users = require('../models/users.model');
const Categories = require('../models/categories.model')

//CONTROLADOR PARA CREAR TAREA 
const postTodoCreate = async (req, res) => {
    try {
        const newUser = req.body;
        await Todos.create(newUser);
        res.status(201).send();
    } catch (error) {
        res.status(400).json(error);
    }
    };


//CONTROLADOR PARA OBTENER TAREA DE UN USUARIOS
const gettodoById = async (req, res) => {
    try {
    const {id} = req.params;
    const todo = await Todos.findByPk(id, {
        attributes: {
            exclude: ['userId']
        },
        include: [{
            model: Users,
            attributes: ['id', 'username']
        },
    {
        model: Categories,
        attributes: ['id', 'name']
    }]
    });
    res.json(todo);   
    } catch (error) {
     res.status(400).json(error);
    }};



//CONTROLADOR PARA ACTUALIZAR ESTADO DE UNA TAREA 

const putTodoActualicer = async (req, res) => {
    try {
        const {id} = req.params;
        const {completed} = req.body;
        await Todos.update({completed}, {
            where: {id}
        });
        res.status(204).send();
    } catch (error) {
    res.status(400).json(error);
    }
};

//CONTROLADOR PARA ELIMINAR UN USUARIO 
const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        await Todos.destroy({
            where: {id}
        });
        res.status(204).send();
    } catch (error) {
    res.status(400).json(error);
}
};


    module.exports = {
        postTodoCreate,
        putTodoActualicer,
        deleteTodo,
        gettodoById
    }