const{Job, JobOwner}=require('../database/index.js');

// Get All jobs
async function getAllJobs(req, res) {
try {
    const jobs = await Job.findAll();
    res.json(jobs);
} catch (error) {
    res.status(500).json({ error: error.message });
}
}

// Get jobs by company:
async function getJobsByCompany(req, res) {
  const { id } = req.params;
  try {
    const job = await Job.findAll({where:{jobOwnerId:id}});
    if (!job) {
      return res.status(404).json('Job post is not found');
    }
    res.status(200).json(job);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

const getChokri = async (req,res) => {
  const { id } = req.params;
  try {
    const job = await Job.findOne({where:{id:id}});
 
    res.status(200).json(job);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

//Get one Job:
async function getOneJob(req, res) {
  const { id } = req.params;
  try {
    const job = await Job.findOne({include:JobOwner,where:{id:id}});
    if (!job) {
      return res.status(404).json('Job post is not found');
    }
    res.status(200).json(job);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

// Create a new job
async function createJob(req, res) {
try {
const { jobtitle, location, budget, image, role, description, qualification, jobOwnerId, jobCategoryId } = req.body;
const newJob = await Job.create({
jobtitle,
location,
budget,
image,
role,
description,
qualification,
jobOwnerId,
jobCategoryId,
});
res.status(201).json(newJob);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

// Update a job by ID
async function updateJob(req, res) {
try {
const { id } = req.params;
const { jobtitle, location, budget, image, role, description, qualification} = req.body;
await Job.update(
{ jobtitle, location, budget, image, role, description, qualification},
{ where: { id:id } }
);
res.status(200).json({ message: 'Job updated successfully' });
} catch (error) {
res.status(500).json({ error: error.message });
}
}
// Update availability

const updateJobAvailability = async (req, res) => {
  const jobId = req.params.id;
  const { available } = req.body;

  try {
    const job = await Job.findByPk(jobId);

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    job.available = available;
    await job.save();

    res.status(200).json({ message: 'Job availability updated successfully' });
  } catch (error) {
    console.error('Error updating job availability:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Delete a job by ID
async function deleteJob(req, res) {
try {
    const { id } = req.params;
    await Job.destroy({ where: { id } });
    res.status(200).json({ message: 'Job deleted successfully' });
} catch (error) {
    res.status(500).json({ error: error.message });
}
}

//Get All Jobs with Job Owner and Job Category details:
async function getAllJobsWithDetails(req, res) {
    try {
      const jobs = await Job.findAll({
        include: [
          { model: JobOwner },
          { model: JobCategory }
        ]
      });
      res.json(jobs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

//Get Job by ID with Job Owner and Job Category details
async function getJobByIdWithDetails(req, res) {
    try {
      const { id } = req.params;
      const job = await Job.findByPk(id, {
        include: [
          { model: JobOwner },
          { model: JobCategory }
        ]
      });
      res.json(job);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

//Get Jobs by Job Category
async function getJobsByCategory(req, res) {
  try {
   
    const { jobCategoryId } = req.params;
    const jobs = await Job.findAll({
      where: { jobCategoryId: jobCategoryId }
    });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


//Get one Job by Job Category:
async function getOneJobByCategory(req, res) {
try {
    const { categoryId } = req.params;
    const job = await Job.findOne({
    where: { jobCategoryId: categoryId },
    include: [
        { model: JobOwner },
        { model: JobCategory }
    ]
    });
    if (!job) {
    return res.status(404).json({ message: 'Job not found in this category' });
    }
    res.json(job);
} catch (error) {
    res.status(500).json({ error: error.message });
}
}
  
module.exports = {
  getAllJobs,createJob,
  updateJob,deleteJob,
  getAllJobsWithDetails,
  getOneJob,
  getJobByIdWithDetails,
  getJobsByCategory,
  getOneJobByCategory,
  getJobsByCompany,
  updateJobAvailability,
  getChokri
};
 
  

  