const express = require('express');
const router = express.Router();
const FreelancerCategory = require('../controllers/freelancerCategories');

// GET all freelancer categories
router.get('/freelancer-category', FreelancerCategory.getAllFreelancerCategories);

// Create a new freelancer category
router.post('/freelancer-category', FreelancerCategory.createFreelancerCategory);

// Update a freelancer category by ID
router.put('/freelancer-category/:id', FreelancerCategory.updateFreelancerCategory);

// Delete a freelancer category by ID
router.delete('/freelancer-category/:id', FreelancerCategory.deleteFreelancerCategory);

module.exports = router;
