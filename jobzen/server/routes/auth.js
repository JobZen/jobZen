const router = require('express').Router();
const authenticateFL= require("../controllers/authFreeLancerController")
const authenticateJW= require("../controllers/authJobowner")



router.post('/jobowner/login', authenticateJW.Login);
router.post('/jobowner/register', authenticateJW.Register);
router.post('/freelancer/login', authenticateFL.Login);
router.post('/freelancer/register', authenticateFL.Register);

module.exports = router
