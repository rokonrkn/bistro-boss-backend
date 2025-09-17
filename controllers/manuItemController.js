const ManuItem = require('../models/manuItem');

const getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await ManuItem.find();

    res.json(menuItems);
  } catch (error) {
    console.error('Error fetching menu items:', error);
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
};

const postMenuItem = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const image = req.file ? req.file.path : null; 

    const newMenuItem = new ManuItem({ name, description, price, category, image });
    await newMenuItem.save();

    res.status(201).json({ message: 'Menu item created successfully' });
  } catch (error) {
    console.error('Error creating menu item:', error);
    res.status(500).json({ error: 'Failed to create menu item' });
  }
};

module.exports = { getAllMenuItems, postMenuItem };
