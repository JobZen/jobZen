const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { createUser} = require('./UserController.js');
const Users=require('../database/User.js')


const generateToken = (id, username) => {
  const expiresIn = 60 * 60 * 48;//2days
  return jwt.sign({ id, username }, 'secretKey', { expiresIn: expiresIn });
};
const Register = async (req, res) => {
  const { username, email, password ,role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      username,
      password,
      email,
      role,
      user_img:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      password: hashedPassword}
     
      createUser({ body: newUser }, res);
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
};


const Login = async(req, res) => {
    const{email,password}=req.body;
    try {
         const result= await Users.findOne({ where :{email:email}})
         if(result ===null) res.send("email not found")
         else {
          const verif=result.dataValues.password
          const passwordMatch = await bcrypt.compare(password,verif)
          if(passwordMatch){
             const token=generateToken(result.dataValues.id,result.dataValues.username)  
             result.dataValues.token=token
            res.send(result.dataValues)
          }
          else{
            res.send("password wrong")
          }
          
      }
    
    }
    catch (error) {res.status(500).json(error)}
};

module.exports = {
  Register,
  Login,
};