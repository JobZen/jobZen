const router = require('express').Router();
const Messages = require('../controllers/messagesController');

// GET all messages
router.get('/', Messages.getAllMessages);

// Create a new message
router.post('/', Messages.createMessage);

// Get a message by ID
router.get('/:id', Messages.getMessageById);

// Delete a message by ID
router.delete('/:id', Messages.deleteMessageById);

// GET all messages with details (including Freelancer and JobOwner)
router.get('/all/details', Messages.getAllMessagesWithDetails);

// Create a message with foreign key references
router.post('/message/FK', Messages.createMessageWithForeignKey);

router.get('/msg/:sender/:reciever/:job', Messages.FindMessageBySenderAndRecieverId);

router.get('/msg/:sender/:job', Messages.FindJobwnersBySenderId);




module.exports = router;