const express = require('express');
const router = express.Router();
const 
{ 
    registerUser, 
    getAllUsers, 
    updateUserRole,
    userDelete
 } = require('../controllers/registrationController');


router.post('/register', registerUser);
router.get('/users', getAllUsers);
router.patch('/users/:userId', updateUserRole);
router.delete('/users/:userId', userDelete);

module.exports = router;