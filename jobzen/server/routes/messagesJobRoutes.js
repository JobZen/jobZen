const router = require('express').Router();
const Messages = require('../controllers/messagesJBController');


router.get('/', Messages.getAllMessages);
router.post('/', Messages.createMessage);
router.get('/:id', Messages.getMessageById);
router.delete('/:id', Messages.deleteMessageById);
router.get('/all/details', Messages.getAllMessagesWithDetails);
router.post('/message/FK', Messages.createMessageWithForeignKey);
router.get('/msg/:sender/:reciever/:job', Messages.FindMessageBySenderAndRecieverId)
router.get('/msg/:sender/:job', Messages.FindJobwnersBySenderId);
router.get('/jj/:sender/:job', Messages.FindMessageBySenderAndRecieverId1);



module.exports = router;