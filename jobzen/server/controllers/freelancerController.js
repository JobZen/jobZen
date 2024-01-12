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

// Create a new freelancer
async function createFreelancer(req, res) {
try {
const { name, email, password } = req.body;
const newFreelancer = await Freelancer.create({
    name,
    email,
    password,
  

});
res.status(201).json(newFreelancer);
} catch (error) {
res.status(500).json({ error: 'Unable to create freelancer' });
}
}

// Update a freelancer by ID
async function updateFreelancer(req, res) {
try {
const { id } = req.params;
const { name, email, password } = req.body;

const freelancerToUpdate = await Freelancer.findByPk(id);
if (!freelancerToUpdate) {
    return res.status(404).json({ message: 'Freelancer not found' });
}

await Freelancer.update(
    { name, email, password},
    { where: { id } }
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
  deleteFreelancer
};
