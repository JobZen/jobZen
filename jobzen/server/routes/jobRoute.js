const express = require('express');
const router = express.Router();
const Job = require('../controllers/jobController');

// GET all jobs
router.get('/job', Job.getAllJobs);

// Create a new job
router.post('/job', Job.createJob);

// Update a job by ID
router.put('/job/:id', Job.updateJob);

// Delete a job by ID
router.delete('/job/:id', Job.deleteJob);

module.exports = router;
