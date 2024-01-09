const router = require('express').Router();
const Messages = require('../controllers/messagesController');

// GET all messages
router.get('/message', Messages.getAllMessages);

// Create a new message
router.post('/message', Messages.createMessage);

// Get a message by ID
router.get('/message/:id', Messages.getMessageById);

// Delete a message by ID
router.delete('/message/:id', Messages.deleteMessageById);

// GET all messages with details (including Freelancer and JobOwner)
router.get('/message/details', Messages.getAllMessagesWithDetails);

// Create a message with foreign key references
router.post('/message/FK', Messages.createMessageWithForeignKey);

module.exports = router;
