import { Admin } from '../database/index.js';

// Get All admins
async function getAllAdmins(req, res) {
try {
const admins = await Admin.findAll();
res.json(admins);
} catch (error) {
res.status(500).json({ error: 'Unable to fetch admins' });
}
}

// Create a new admin
async function createAdmin(req, res) {
try {
const { name, email, password, image } = req.body;
const newAdmin = await Admin.create({
    name,
    email,
    password,
    image
});
res.status(201).json(newAdmin);
} catch (error) {
res.status(500).json({ error: 'Unable to create admin' });
}
}

// Update an admin by ID
async function updateAdmin(req, res) {
try {
const { id } = req.params;
const { name, email, password, image } = req.body;

const admin = await Admin.findByPk(id);
if (!admin) {
    return res.status(404).json({ message: 'Admin not found' });
}

await Admin.update(
    { name, email, password, image },
    { where: { id } }
);
res.status(200).json({ message: 'Admin updated successfully' });
} catch (error) {
res.status(500).json({ error: 'Unable to update admin' });
}
}

// Delete an admin by ID
async function deleteAdmin(req, res) {
try {
const { id } = req.params;
const deleted = await Admin.destroy({ where: { id } });

if (!deleted) {
    return res.status(404).json({ message: 'Admin not found' });
}

res.status(200).json({ message: 'Admin deleted successfully' });
} catch (error) {
res.status(500).json({ error: 'Unable to delete admin' });
}
}

module.exports = {
  getAllAdmins,
  createAdmin,
  updateAdmin,
  deleteAdmin
};
