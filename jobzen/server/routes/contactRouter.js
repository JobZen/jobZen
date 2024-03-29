const router=require('express').Router()
const Contact=require('../controllers/contactController')

router.post('/add',Contact.add)
router.get('/get',Contact.get)
router.delete('/delete/:id', Contact.delete);
router.post('/addReply', Contact.addReply);

module.exports =router