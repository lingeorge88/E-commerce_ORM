const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: Product,
    });
    res.status(200).json(categoryData);
  }catch (err){
    res.status(500).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: Product,
    });
    if(!categoryData){
      res.status(404).json({message: 'No category found with this id!'});
      return;
    }
    res.status(200).json(categoryData);
  }catch (err){
    res.status(500).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async(req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err){
    res.status(400).json(err);
  }
  // create a new category
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
    const { id } = req.params;
    const { categoryName } = req.body;
  
    try {
      const category = await Category.findByPk(id);
  
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
  
      category.categoryName = categoryName;
      await category.save();
  
      res.json({ message: 'Category updated successfully', category });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!categoryData){
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
