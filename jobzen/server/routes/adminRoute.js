const express = require('express');
const router = express.Router();
const Admin = require('../controllers/adminController');

// GET all admins
router.get('/admins', Admin.getAllAdmins);

// Create a new admin
router.post('/admins', Admin.createAdmin);

// Get admin by ID
router.get('/admins/:id', Admin.getAdminById);

// Update admin by ID
router.put('/admins/:id', Admin.updateAdmin);

// Delete admin by ID
router.delete('/admins/:id', Admin.deleteAdmin);

module.exports = router;

module.exports = router;
