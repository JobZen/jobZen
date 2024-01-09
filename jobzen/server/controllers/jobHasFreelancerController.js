const{Freelancer, JobHasFreelancer, Job}=require('../database/index.js');

//Get All Job-Freelancer Associations:
async function getAllJobFreelancerAssociations(req, res) {
try {
    const associations = await JobHasFreelancer.findAll();
    res.json(associations);
} catch (error) {
    res.status(500).json({ error: error.message });
}
}

//Get Job-Freelancer Association by ID
async function getJobFreelancerAssociationById(req, res) {
try {
const { id } = req.params;
const association = await JobHasFreelancer.findByPk(id);

if (!association) {
    return res.status(404).json({ message: 'Job-Freelancer association not found' });
}

res.json(association);
} catch (error) {
res.status(500).json({ error: error.message });
}
}
//Get All Freelancers for a Specific Job:
async function getFreelancersByJobId(req, res) {
try {
const { jobId } = req.params;
const freelancers = await JobHasFreelancer.findAll({
where: { jobId: jobId }
});
res.json(freelancers);
} catch (error) {
res.status(500).json({ error: error.message });
}
}
//Get All Jobs for a Specific Freelancer:
async function getJobsByFreelancerId(req, res) {
try {
    const { freelancerId } = req.params;
    const jobs = await JobHasFreelancer.findAll({
    where: { freelancerId: freelancerId }
    });
    res.json(jobs);
} catch (error) {
    res.status(500).json({ error: error.message });
}
}
//get Freelancer with details
async function getJobFreelancerAssociationsWithDetails(req, res) {
try {
    const associations = await JobHasFreelancer.findAll({
    include: [
        { model: Job },
        { model: Freelancer }
    ]
    });
    res.json(associations);
} catch (error) {
    res.status(500).json({ error: error.message });
}
}
// get the freelancer by job Id:
async function getFreelancerByJobId(req, res) {
try {
    const { jobId } = req.params;
    const jobFreelancerAssociation = await JobHasFreelancer.findOne({
    where: { jobId: jobId },
    include: [{ model: Freelancer }]
    });

    if (!jobFreelancerAssociation) {
    return res.status(404).json({ message: 'No freelancer found for this job' });
    }

    const freelancer = jobFreelancerAssociation.freelancer; // Use lowercase 'freelancer'
    res.json(freelancer);
} catch (error) {
    res.status(500).json({ error: error.message });
}
}

  module.exports = {
    getAllJobFreelancerAssociations,
    getJobFreelancerAssociationById,
    getFreelancersByJobId,
    getJobsByFreelancerId,
    getJobFreelancerAssociationsWithDetails,
    getFreelancerByJobId};

  
  