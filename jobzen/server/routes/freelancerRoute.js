const router = require('express').Router();
const Freelancer = require('../controllers/freelancerController');

// GET all freelancers
router.get('/', Freelancer.getAllFreelancers);

//getOne
router.get('/:id', Freelancer.getFreelancerById);

// Create a new freelancer
router.post('/freelancer', Freelancer.createFreelancer);

// Update a freelancer by ID
router.put('/:id', Freelancer.updateFreelancer);

// Delete a freelancer by ID
router.delete('/:id', Freelancer.deleteFreelancer);

module.exports = router;
