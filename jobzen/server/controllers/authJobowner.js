const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { createJobOwner} = require('./jobOwnerController.js');
const {JobOwner}=require('../database/index.js')
const { generateToken } = require ('../services/TokenServices.js')



const Register = async (req, res) => {
  const { name, email, password  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name,
      password,
      email,
      image:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      password: hashedPassword}
     
      createJobOwner({ body: newUser }, res);
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
};


const Login = async(req, res) => {
    const{email,password}=req.body;
    try {
         const result= await JobOwner.findOne({ where :{email:email}})
         if(result ===null) res.send("email not found")
         else {
      
          const verif=result.dataValues.password
          const passwordMatch = await bcrypt.compare(password,verif)
          
          if(passwordMatch){
             const token= generateToken(result.dataValues.id,result.dataValues.name)  
            
             result.dataValues.token=token
        
            res.status(200).json(result.dataValues)
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