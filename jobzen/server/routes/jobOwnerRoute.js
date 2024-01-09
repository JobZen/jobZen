const express = require('express');
const router = express.Router();
const JobOwner = require('../controllers/jobOwnerController');

// GET all job owners
router.get('/job-owner', JobOwner.getAllJobOwners);

//GET one job Owner
router.get('/job-owner/:id', JobOwner.getOneJobOwner);

// Create a new job owner
router.post('/job-owner', JobOwner.createJobOwner);

// Update a job owner by ID
router.put('/job-owner/:id', JobOwner.updateJobOwner);

// Delete a job owner by ID
router.delete('/job-owner/:id', JobOwner.deleteJobOwner);

module.exports = router;
