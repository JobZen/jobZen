const{ JobCategory }=require('../database/index.js');

// Get All job categories
async function getAllJobCategories(req, res) {
try {
const jobCategories = await JobCategory.findAll();
res.json(jobCategories);
} catch (error) {
res.status(500).json({ error: 'Unable to fetch job categories' });
}
}

// Create a new job category
async function createJobCategory(req, res) {
try {
const { category, image } = req.body;
const newJobCategory = await JobCategory.create({
    category,
    image
});
res.status(201).json(newJobCategory);
} catch (error) {
res.status(500).json({ error: 'Unable to create job category' });
}
}

// Update a job category by ID
async function updateJobCategory(req, res) {
try {
const { id } = req.params;
const { category, image } = req.body;

const jobCategoryToUpdate = await JobCategory.findByPk(id);
if (!jobCategoryToUpdate) {
    return res.status(404).json({ message: 'Job category not found' });
}

await JobCategory.update(
    { category, image },
    { where: { id } }
);
res.status(200).json({ message: 'Job category updated successfully' });
} catch (error) {
res.status(500).json({ error: 'Unable to update job category' });
}
}

// Delete a job category by ID
async function deleteJobCategory(req, res) {
try {
const { id } = req.params;
const deleted = await JobCategory.destroy({ where: { id } });

if (!deleted) {
    return res.status(404).json({ message: 'Job category not found' });
}

res.status(200).json({ message: 'Job category deleted successfully' });
} catch (error) {
res.status(500).json({ error: 'Unable to delete job category' });
}
}

module.exports = {
  getAllJobCategories,
  createJobCategory,
  updateJobCategory,
  deleteJobCategory
};
