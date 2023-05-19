const Users = require('./users.model');
const Todos = require('./todos.model');
const Categories = require('./categories.model');

const initModels = () => {


    // una tarea le pertenece a un usuario -belongsTo
    // un usuario tiene muchas respuestas - hasMany
    Todos.belongsTo(Users, {foreignKey: 'userId'});
    Users.hasMany(Todos, {foreignKey: 'userId'});


    // una tarea tiene una categoria -belongsTo
    // una categoria tiene muchas tareas - hasMany
    Todos.belongsTo(Categories, {foreignKey: 'categoryId'});
    Categories.hasMany(Todos, {foreignKey: 'categoryId'});


};



module.exports = initModels;