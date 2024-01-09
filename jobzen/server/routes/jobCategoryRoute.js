const router = require('express').Router();
const jobCategory = require('../controllers/jobCategoryController');

// GET all job categories
router.get('/jobCategory', jobCategory.getAllJobCategories);

// Create a new job category
router.post('/jobCategory', jobCategory.createJobCategory);

// Update a job category by ID
router.put('/jobCategory/:id', jobCategory.updateJobCategory);

// Delete a job category by ID
router.delete('/jobCategory/:id', jobCategory.deleteJobCategory);

module.exports = router;
