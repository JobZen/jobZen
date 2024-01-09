const{ContactJobOwner,JobOwner}=require('../database/index.js');

//CRUD:
async function getAllContactsToJobOwners(req, res) {
try {
const contacts = await ContactJobOwner.findAll();
res.json(contacts);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function createContactToJobOwner(req, res) {
try {
const { email, subject, body } = req.body;
const newContact = await ContactJobOwner.create({
email,
subject,
body
});
res.status(201).json(newContact);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function getContactToJobOwnerById(req, res) {
try {
const { id } = req.params;
const contact = await ContactJobOwner.findByPk(id);

if (!contact) {
return res.status(404).json({ message: 'Contact message not found' });
}

res.json(contact);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function deleteContactToJobOwnerById(req, res) {
try {
const { id } = req.params;
const deleted = await ContactJobOwner.destroy({ where: { id } });

if (!deleted) {
return res.status(404).json({ message: 'Contact message not found' });
}

res.status(200).json({ message: 'Contact message deleted successfully' });
} catch (error) {
res.status(500).json({ error: error.message });
}
}

//CRUD with FK:
//Get All Contact Messages with Job Owner Details:
async function getAllContactsWithJobOwnerDetails(req, res) {
try {
    const contacts = await ContactJobOwner.findAll({
    include: [{ model: JobOwner }]
    });
    res.json(contacts);
} catch (error) {
    res.status(500).json({ error: error.message });
}
}

//Create a New Contact Message to Job Owner with Foreign Key:
async function createContactToJobOwnerWithForeignKey(req, res) {
try {
    const { jobOwnerId, email, subject, body } = req.body;
    const newContact = await ContactJobOwner.create({
        jobOwnerId,
        email,
        subject,
        body
    });
    res.status(201).json(newContact);
} catch (error) {
    res.status(500).json({ error: error.message });
}
}

//Get Contact Messages for a Specific Job Owner:
async function getContactsToJobOwnerById(req, res) {
    try {
      const { jobOwnerId } = req.params;
      const contacts = await ContactJobOwner.findAll({
        where: { jobOwnerId },
        include: [{ model: JobOwner }]
      });
  
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

module.exports = {
  getAllContactsToJobOwners,
  createContactToJobOwner,
  getContactToJobOwnerById,
  deleteContactToJobOwnerById,
  getAllContactsWithJobOwnerDetails,
  createContactToJobOwnerWithForeignKey,
  getContactsToJobOwnerById
}
  

  