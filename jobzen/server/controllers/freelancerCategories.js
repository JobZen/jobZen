import { FreelancerCategories } from '../database/index.js';

// Get All freelancer categories
async function getAllFreelancerCategories(req, res) {
try {
const freelancerCategories = await FreelancerCategories.findAll();
res.json(freelancerCategories);
} catch (error) {
res.status(500).json({ error: 'Unable to fetch freelancer categories' });
}
}

// Create a new freelancer category
async function createFreelancerCategory(req, res) {
try {
const { category, image } = req.body;
const newFreelancerCategory = await FreelancerCategories.create({
    category,
    image
});
res.status(201).json(newFreelancerCategory);
} catch (error) {
res.status(500).json({ error: 'Unable to create freelancer category' });
}
}

// Update a freelancer category by ID
async function updateFreelancerCategory(req, res) {
try {
const { id } = req.params;
const { category, image } = req.body;

const categoryToUpdate = await FreelancerCategories.findByPk(id);
if (!categoryToUpdate) {
    return res.status(404).json({ message: 'Freelancer category not found' });
}

await FreelancerCategories.update(
    { category, image },
    { where: { id } }
);
res.status(200).json({ message: 'Freelancer category updated successfully' });
} catch (error) {
res.status(500).json({ error: 'Unable to update freelancer category' });
}
}

// Delete a freelancer category by ID
async function deleteFreelancerCategory(req, res) {
try {
const { id } = req.params;
const deleted = await FreelancerCategories.destroy({ where: { id } });

if (!deleted) {
    return res.status(404).json({ message: 'Freelancer category not found' });
}

res.status(200).json({ message: 'Freelancer category deleted successfully' });
} catch (error) {
res.status(500).json({ error: 'Unable to delete freelancer category' });
}
}

module.exports = {
  getAllFreelancerCategories,
  createFreelancerCategory,
  updateFreelancerCategory,
  deleteFreelancerCategory
};
