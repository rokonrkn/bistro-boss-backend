const ManuItem = require('../models/manuItem');

const getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await ManuItem.find();

    // Log data in console
    console.log('Menu Items:', menuItems);

    res.json(menuItems);
  } catch (error) {
    console.error('Error fetching menu items:', error);
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
};

module.exports = { getAllMenuItems };
