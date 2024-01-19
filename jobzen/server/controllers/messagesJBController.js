const{ JobOwnerMessages, Freelancer, JobOwner }=require('../database/index.js');

// CRUD operations
async function getAllMessages(req, res) {
try {
const messages = await JobOwnerMessages.findAll();
res.json(messages);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function createMessage(req, res) {
try {
const newMessage = await JobOwnerMessages.create(req.body);
res.status(201).json(newMessage);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function getMessageById(req, res) {
try {
const { id } = req.params;
const message = await JobOwnerMessages.findByPk(id);

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
const deleted = await JobOwnerMessages.destroy({ where: { id } });

if (!deleted) {
    return res.status(404).json({ message: 'Message not found' });
}

res.status(200).json({ message: 'Message deleted successfully' });
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function FindMessageBySenderAndRecieverId(req, res) {
    try {
    const { sender , reciever } = req.params;
    const messages = await JobOwnerMessages.findAll({ where: { sender:sender , reciever:reciever } });
    
    if (!messages.length) {
        return res.status(501).json({ message: 'No Messages to be foundt' });
    }
    
    res.status(200).json(messages);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
    }


// CRUD operations with Foreign Keys

async function getAllMessagesWithDetails(req, res) {
try {
const messages = await JobOwnerMessages.findAll({
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
const newMessage = await JobOwnerMessages.create({
    body,
    sender,
    reciever
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
  createMessageWithForeignKey,
  FindMessageBySenderAndRecieverId
};


