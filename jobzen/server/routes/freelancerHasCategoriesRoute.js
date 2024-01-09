const router = require('express').Router();
const FreelancerHasCategory = require('../controllers/freelancerHasCategories.js');

// GET all freelancer categories associations
router.get('/freelancerHasCategory', FreelancerHasCategory.getAllFreelancerCategories);

// Create a new freelancer category association
router.post('/freelancerHasCategory', FreelancerHasCategory.addFreelancerToCategory);

// Update a freelancer category association by ID
router.put('/freelancerHasCategory/:id', FreelancerHasCategory.removeFreelancerFromCategory);

// get freelancer category  by ID
router.get('/freelancerHasCategory/:id', FreelancerHasCategory.getFreelancerCategoryById);

// Retrieve all associations with freelancers and categories details
router.get('/freelancerHasCategory/details', FreelancerHasCategory.getAllFreelancersWithCategories);

// Create an association with details (freelancer and category)
router.post('/freelancerHasCategory/association', FreelancerHasCategory.createAssociationWithDetails);

module.exports = router;
