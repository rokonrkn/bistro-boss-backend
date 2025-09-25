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

    const newMenuItem = new ManuItem({ name, category, price, description, image });
    await newMenuItem.save();

    res.status(201).json({ message: 'Menu item created successfully' });
  } catch (error) {
    console.error('Error creating menu item:', error);
    res.status(500).json({ error: 'Failed to create menu item' });
  }
};

const deleteManuItem = (req, res) => {
  const { id } = req.params;
  ManuItem.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ message: 'Menu item deleted successfully' });
    })
    .catch((error) => {
      console.error('Error deleting menu item:', error);
      res.status(500).json({ error: 'Failed to delete menu item' });
    });
}

module.exports = { getAllMenuItems, postMenuItem, deleteManuItem };
