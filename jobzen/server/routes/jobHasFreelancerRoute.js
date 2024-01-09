const router = require('express').Router();
const JobFreelancer = require('../controllers/jobHasFreelancerController');

// GET all job-freelancer associations
router.get('/job-freelancer', JobFreelancer.getAllJobFreelancerAssociations);

// Get job-freelancer association by ID
router.get('/job-freelancer/:id', JobFreelancer.getJobFreelancerAssociationById);

// Get freelancers for a specific job
router.get('/job-freelancer/job/:jobId',JobFreelancer.getFreelancersByJobId);

// Get jobs for a specific freelancer
router.get('/job-freelancer/freelancer/:freelancerId', JobFreelancer.getJobsByFreelancerId);

// Get job-freelancer associations with details
router.get('/job-freelancer/details', JobFreelancer.getJobFreelancerAssociationsWithDetails);

// Get freelancer for a specific job
router.get('/job-freelancer/job/:jobId/freelancer', JobFreelancer.getFreelancerByJobId);

module.exports = router;
