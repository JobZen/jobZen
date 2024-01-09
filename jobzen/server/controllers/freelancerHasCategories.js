import { FreelancerHasCategories, FreelancerCategories, Freelancer } from '../database/index.js';

// CRUD operations
async function getAllFreelancerCategories(req, res) {
try {
const freelancerCategories = await FreelancerHasCategories.findAll();
res.json(freelancerCategories);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function addFreelancerToCategory(req, res) {
try {
const { freelancerId, freelancerCategoryId } = req.body;
const newAssociation = await FreelancerHasCategories.create({
    FreeLancerId: freelancerId,
    FreeLancerCategoriesId: freelancerCategoryId
});
res.status(201).json(newAssociation);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function getFreelancerCategoryById(req, res) {
try {
const { id } = req.params;
const association = await FreelancerHasCategories.findByPk(id);
if (!association) {
    return res.status(404).json({ message: 'Association not found' });
}
res.json(association);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function removeFreelancerFromCategory(req, res) {
try {
const { id } = req.params;
const deleted = await FreelancerHasCategories.destroy({ where: { id } });

if (!deleted) {
    return res.status(404).json({ message: 'Association not found' });
}

res.status(200).json({ message: 'Association deleted successfully' });
} catch (error) {
res.status(500).json({ error: error.message });
}
}

// CRUD operations with Foreign Keys
async function getAllFreelancersWithCategories(req, res) {
try {
const associations = await FreelancerHasCategories.findAll({
    include: [{ model: Freelancer }, { model: FreelancerCategories }]
});
res.json(associations);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function createAssociationWithDetails(req, res) {
try {
const { freelancerId, freelancerCategoryId } = req.body;
const newAssociation = await FreelancerHasCategories.create({
    FreeLancerId: freelancerId,
    FreeLancerCategoriesId: freelancerCategoryId
});
res.status(201).json(newAssociation);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

module.exports = {
  getAllFreelancerCategories,
  addFreelancerToCategory,
  getFreelancerCategoryById,
  removeFreelancerFromCategory,
  getAllFreelancersWithCategories,
  createAssociationWithDetails
};
