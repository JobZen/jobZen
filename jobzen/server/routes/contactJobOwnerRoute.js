const express = require('express');
const router = express.Router();
const ContactJobOwner = require('../controllers/contactJobOwner');

// GET all contact messages to job owners with details
router.get('/contact-job-owner', ContactJobOwner.getAllContactsWithJobOwnerDetails);

// Create a new contact message to job owner with foreign key
router.post('/contact-job-owner', ContactJobOwner.createContactToJobOwnerWithForeignKey);

// Get contact message to job owner by ID with details
router.get('/contact-job-owner/:id', ContactJobOwner.getContactToJobOwnerByIdWithDetails);

// Delete contact message to job owner by ID
router.delete('/contact-job-owner/:id', ContactJobOwner.deleteContactToJobOwnerById);

module.exports = router;
