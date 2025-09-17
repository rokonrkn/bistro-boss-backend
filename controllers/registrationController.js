const Registration = require('../models/registrationModels');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    try {
        const newUser = new Registration({ username, email, password: hashPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Failed to register user' });
    }
};

module.exports = { registerUser };