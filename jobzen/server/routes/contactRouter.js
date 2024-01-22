const router=require('express').Router()
const Contact=require('../controllers/contactController')

router.post('/add',Contact.add)
router.get('/get',Contact.get)

module.exports =router