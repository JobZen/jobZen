const router = require('express').Router();
const Job = require('../controllers/jobController');

// GET all jobs
router.get('/job', Job.getAllJobs);

// GET jobs by companyy
router.get('/jobbycompany/:id', Job.getJobsByCompany);

// GET one job
router.get('/job/:id', Job.getOneJob);

// GET all jobs by category
router.get('/jobbycategory/:jobCategoryId',Job.getJobsByCategory)

// GET all jobs with job owner and job category details
router.get('/jobsWithDetails',Job.getAllJobsWithDetails)

// Create a new job
router.post('/job', Job.createJob);

// Updating job availability
router.patch('/job/updateAvailability/:id', Job.updateJobAvailability);

// Update a job by ID
router.put('/job/:id', Job.updateJob);

// Delete a job by ID
router.delete('/job/:id', Job.deleteJob);

module.exports = router;
