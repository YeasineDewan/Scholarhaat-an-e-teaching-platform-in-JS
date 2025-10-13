import models from '../models/index.js';

// Get all categories
export const getCategories = async (req, res) => {
  try {
    const categories = await models.Category.findAll({
      where: { isActive: true },
      attributes: ['id', 'name', 'icon', 'description']
    });
    
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get category by ID
export const getCategoryById = async (req, res) => {
  try {
    const category = await models.Category.findByPk(req.params.id);
    
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    
    res.status(200).json(category);
  } catch (error) {
    console.error('Error fetching category:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
