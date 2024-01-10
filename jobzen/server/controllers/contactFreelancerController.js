const{ ContactFreelancer, Freelancer }=require('../database/index.js');
// CRUD operations
async function getAllContactsToFreelancers(req, res) {
  try {
    const contacts = await ContactFreelancer.findAll();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createContactToFreelancer(req, res) {
  try {
    const { freelancerId, email, subject, body } = req.body;
    const newContact = await ContactFreelancer.create({
      freelancerId,
      email,
      subject,
      body
    });
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getContactToFreelancerById(req, res) {
  try {
    const { id } = req.params;
    const contact = await ContactFreelancer.findByPk(id);

    if (!contact) {
      return res.status(404).json({ message: 'Contact message not found' });
    }

    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteContactToFreelancerById(req, res) {
  try {
    const { id } = req.params;
    const deleted = await ContactFreelancer.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ message: 'Contact message not found' });
    }

    res.status(200).json({ message: 'Contact message deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// CRUD operations with Foreign Key
async function getAllContactsWithFreelancerDetails(req, res) {
  try {
    const contacts = await ContactFreelancer.findAll({
      include: [{ model: Freelancer }]
    });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createContactToFreelancerWithForeignKey(req, res) {
  try {
    const { freelancerId, email, subject, body } = req.body;
    const newContact = await ContactFreelancer.create({
      freelancerId,
      email,
      subject,
      body
    });
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getContactsToFreelancerByFK(req, res) {
  try {
    const { freelancerId } = req.params;
    const contacts = await ContactFreelancer.findAll({
      where: { freelancerId },
      include: [{ model: Freelancer }]
    });

    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllContactsToFreelancers,
  createContactToFreelancer,
  getContactToFreelancerById,
  deleteContactToFreelancerById,
  getAllContactsWithFreelancerDetails,
  createContactToFreelancerWithForeignKey,
  getContactsToFreelancerByFK
};
