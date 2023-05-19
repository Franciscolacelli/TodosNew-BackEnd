const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 8000;
const db = require('./utils/database');
const userRoutes = require('./routes/users.routes');
const Categories = require('./models/categories.model');
const todosRoutes = require('./routes/todos.routes');
const initModels = require('./models/initModels');


initModels();

db.authenticate()
.then(() => console.log("Base de datos conectada"))
.catch((error) => console.log(error));

db.sync() 
    .then(() => console.log("Base de datos sincronozada"))
    .catch(error => console.log(error));


const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Servidor OK')
});


app.use(userRoutes, todosRoutes)




app.listen(PORT, () => {
    console.log(`Servidor escuchando en ${PORT}`)
})