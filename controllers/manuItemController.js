const ManuItem = require('../models/manuItem');
const path = require('path');
const fs = require('fs');

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
    const image = req.file ? req.file.filename : null;

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

const updateMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category } = req.body;
    
    
    const menuItem = await ManuItem.findById(id);
    if (!menuItem) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
   
    const updatedData = { name, description, price, category };
    if (req.file) {
      
      if (menuItem.image) {
        const oldImagePath = path.join(__dirname, '..', 'uploads', menuItem.image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }

      
      updatedData.image = req.file.filename;
    }

   
    const updatedMenuItem = await ManuItem.findByIdAndUpdate(id, updatedData, { new: true });

    res.status(200).json({
      message: 'Menu item updated successfully',
      menuItem: updatedMenuItem,
    });
  } catch (error) {
    console.error('Error updating menu item:', error);
    res.status(500).json({ error: 'Failed to update menu item' });
  }
};

module.exports = { getAllMenuItems, postMenuItem, deleteManuItem, updateMenuItem };
