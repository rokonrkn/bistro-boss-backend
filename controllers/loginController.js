const Registration = require('../models/registrationModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {

        const user = await Registration.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }


        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }


        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET || "yourSecretKey",
            { expiresIn: "1h" }
        );
        

        res.status(200).json({
            message: 'Login successful',
            user: {
                name: user.username,
                email: user.email,
                role: user.role
            },
            token
        });

    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Failed to log in user' });
    }
};

module.exports = { loginUser };
