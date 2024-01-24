const{ Contact, Admin, Freelancer, JobOwner }=require('../database/index.js');

module.exports={
add:async (req,res)=>{
    let msg =await Contact.create(req.body)
    res.status(200).json(msg) 
},
get:async(req,res)=>{
    let msg =await Contact.findAll()
    res.status(200).json(msg)

},
delete: async (req, res) => {
      const messageId = req.params.id;
      let msg = await Contact.findByPk(messageId);
      await msg.destroy();
      res.status(204).json(msg);
}
}

