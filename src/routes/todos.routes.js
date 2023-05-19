const { Router } = require('express');
const { postTodoCreate, gettodoById,putTodoActualicer, deleteTodo } = require('../controllers/todos.controllers');



const routers = Router();


// CREAR TAREA
routers.post('/todos', postTodoCreate);

// OBTENER TAREA DE UN USUARIOS
routers.get('/todos/:id', gettodoById);

// ACTUALIZAR ESTADO DE TAREA
routers.put('/todos/:id', putTodoActualicer);

// ELIMINAR TAREA
routers.delete('/todos/:id', deleteTodo);


module.exports = routers;