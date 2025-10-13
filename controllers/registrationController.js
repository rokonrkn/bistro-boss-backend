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

const getAllUsers = async (req, res) => {
    try {
        const users = await Registration.find();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

const updateUserRole = async (req, res) => {
    const { userId } = req.params;
    const { role } = req.body;
    try {
        const updatedUser = await Registration.findByIdAndUpdate(userId, { role }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User role updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error updating user role:', error);
        res.status(500).json({ error: 'Failed to update user role' });
    }
};

const userDelete = async (req, res) => {
    const { userId } = req.params;
    try {
        const deletedUser = await Registration.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Failed to delete user' });
    }
};

module.exports = 
{ 
    registerUser, 
    getAllUsers,
    updateUserRole,
    userDelete
};