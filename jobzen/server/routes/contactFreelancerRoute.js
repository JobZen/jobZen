const router = require('express').Router();
const ContactFreelancer = require('../controllers/contactFreelancerController.js');

// GET all contact messages to freelancers with details
router.get('/contact-freelancer', ContactFreelancer.getAllContactsWithFreelancerDetails);

// Create a new contact message to freelancer with foreign key
router.post('/contact-freelancer', ContactFreelancer.createContactToFreelancerWithForeignKey);

// Get contact message to freelancer by ID with details
router.get('/contact-freelancer/:id', ContactFreelancer.getAllContactsWithFreelancerDetails);

// Delete contact message to freelancer by ID
router.delete('/contact-freelancer/:id', ContactFreelancer.deleteContactToFreelancerById);

module.exports = router;
