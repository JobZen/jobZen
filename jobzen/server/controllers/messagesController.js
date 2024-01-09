const{ Messages, Freelancer, JobOwner }=require('../database/index.js');

// CRUD operations
async function getAllMessages(req, res) {
try {
const messages = await Messages.findAll();
res.json(messages);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function createMessage(req, res) {
try {
const { body } = req.body;
const newMessage = await Messages.create({ body });
res.status(201).json(newMessage);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function getMessageById(req, res) {
try {
const { id } = req.params;
const message = await Messages.findByPk(id);

if (!message) {
    return res.status(404).json({ message: 'Message not found' });
}

res.json(message);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function deleteMessageById(req, res) {
try {
const { id } = req.params;
const deleted = await Messages.destroy({ where: { id } });

if (!deleted) {
    return res.status(404).json({ message: 'Message not found' });
}

res.status(200).json({ message: 'Message deleted successfully' });
} catch (error) {
res.status(500).json({ error: error.message });
}
}

// CRUD operations with Foreign Keys
async function getAllMessagesWithDetails(req, res) {
try {
const messages = await Messages.findAll({
    include: [
    { model: Freelancer },
    { model: JobOwner }
    ]
});
res.json(messages);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function createMessageWithForeignKey(req, res) {
try {
const { body, freelancerId, jobOwnerId } = req.body;
const newMessage = await Messages.create({
    body,
    freelancerId,
    jobOwnerId
});
res.status(201).json(newMessage);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

module.exports = {
  getAllMessages,
  createMessage,
  getMessageById,
  deleteMessageById,
  getAllMessagesWithDetails,
  createMessageWithForeignKey
};


