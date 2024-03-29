const { log } = require('console');
const{ Freelancer }=require('../database/index.js');

// Get All freelancers
async function getAllFreelancers(req, res) {
try {
const freelancers = await Freelancer.findAll();
res.json(freelancers);
} catch (error) {
res.status(500).json({ error: 'Unable to fetch freelancers' });
}
}


//get frelancers by category
async function getFreelancerBycategory(req, res) {
  const { id} = req.params;

  try {
    const freelancer = await Freelancer.findAll({where:{FreelancerCategoriesId:id}}); 
    console.log(freelancer);
    if (!freelancer) {
      return res.status(404).json({ error: 'Freelancer not found' });
      
    }
    res.json(freelancer);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch the freelancer' });
  
  }
  
}

// get One

async function getFreelancerById(req, res) {
    const freelancerId = req.params.id; // Assuming the ID is passed as a route parameter
  console.log(freelancerId);
    try {
      const freelancer = await Freelancer.findByPk(freelancerId); // Assuming "findByPk" is the method to find by primary key
      console.log(freelancer);
      if (!freelancer) {
        return res.status(404).json({ error: 'Freelancer not found' });
        
      }
      res.json(freelancer);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch the freelancer' });
    
    }
    
  }


// Create a new freelancer
async function createFreelancer(req, res) {
try {
const { name, email, password ,image,adress,phone,aboutMe,skills,experience,jobtitle,FreelancerCategoriesId} = req.body;
const newFreelancer = await Freelancer.create({
    name,
    email,
    password,
    image,
    adress,
    phone,
    aboutMe,
    skills,
    experience,
    jobtitle,
    FreelancerCategoriesId
});
console.log(newFreelancer);
res.status(201).json(newFreelancer);
} catch (error) {
res.status(500).json({error: error.message });
}
}

// Update a freelancer by ID
async function updateFreelancer(req, res) {
try {
const { id } = req.params;
const {  name, email, password ,image,adress,phone,aboutMe,skills,experience,jobtitle } = req.body;

const freelancerToUpdate = await Freelancer.findByPk(id);
if (!freelancerToUpdate) {
    return res.status(404).json({ message: 'Freelancer not found' });
}

await Freelancer.update(
    {  name, email, password ,image,adress,phone,aboutMe,skills,experience,jobtitle},
    { where: { id:id } }
);
res.status(200).json({ message: 'Freelancer updated successfully' });
} catch (error) {
res.status(500).json({ error: 'Unable to update freelancer' });
}
}

// Delete a freelancer by ID
async function deleteFreelancer(req, res) {
try {
const { id } = req.params;
const deleted = await Freelancer.destroy({ where: { id } });

if (!deleted) {
    return res.status(404).json({ message: 'Freelancer not found' });
}

res.status(200).json({ message: 'Freelancer deleted successfully' });
} catch (error) {
res.status(500).json({ error: 'Unable to delete freelancer' });
}
}

module.exports = {
  getAllFreelancers,
  createFreelancer,
  updateFreelancer,
  deleteFreelancer,
  getFreelancerById,
  getFreelancerBycategory
};
