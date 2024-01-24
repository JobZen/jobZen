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
},
addReply: async (req, res) => {
    try {
      const messageId = req.body.id;
      const reply = req.body.reply;
      let msg = await Contact.findByPk(messageId);
      msg.reply = reply;
      await msg.save();
      res.status(200).json(msg);
    } catch (error) {
      console.error('Error adding reply:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};


