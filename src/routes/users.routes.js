const { Router } = require('express');
const { postUserCreate } = require('../controllers/users.controllers');



const router = Router();


// CREAR USUARIO
router.post('/users', postUserCreate);




module.exports = router;