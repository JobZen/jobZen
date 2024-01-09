const express = require('express');
const router = express.Router();
const FreelancerHasCategory = require('../controllers/freelancerHasCategories');

// GET all freelancer categories associations
router.get('/freelancerHasCategory', FreelancerHasCategory.getAllFreelancerCategories);

// Create a new freelancer category association
router.post('/freelancerHasCategory', FreelancerHasCategory.createFreelancerCategory);

// Update a freelancer category association by ID
router.put('/freelancerHasCategory/:id', FreelancerHasCategory.updateFreelancerCategory);

// Delete a freelancer category association by ID
router.delete('/freelancerHasCategory/:id', FreelancerHasCategory.deleteFreelancerCategory);

// Retrieve all associations with freelancers and categories details
router.get('/freelancerHasCategory/details', FreelancerHasCategory.getAllFreelancerCategoriesWithDetails);

// Create an association with details (freelancer and category)
router.post('/freelancerHasCategory/association', FreelancerHasCategory.createAssociationWithDetails);

module.exports = router;
