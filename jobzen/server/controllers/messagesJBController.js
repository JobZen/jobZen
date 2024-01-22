const { default: axios } = require('axios');

const{ JobOwnerMessages, Freelancer, JobOwner ,FreelancerMessages }=require('../database/index.js');

// CRUD operations
async function getAllMessages(req, res) {
try {
const messages = await JobOwnerMessages.findAll();
res.json(messages);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function createMessage(req, res) {
try {
const newMessage = await JobOwnerMessages.create(req.body);
res.status(201).json(newMessage);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function getMessageById(req, res) {
try {
const { id } = req.params;
const message = await JobOwnerMessages.findByPk(id);

res.json(message);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function deleteMessageById(req, res) {
try {
const { id } = req.params;
const deleted = await JobOwnerMessages.destroy({ where: { id } });

if (!deleted) {
    return res.status(404).json({ message: 'Message not found' });
}

res.status(200).json({ message: 'Message deleted successfully' });
} catch (error) {
res.status(500).json({ error: error.message });
}
}




// CRUD operations with Foreign Keys

async function getAllMessagesWithDetails(req, res) {
try {
const messages = await JobOwnerMessages.findAll({
    include: [
    { model: Freelancer },
    { model: JobOwner }
    ]
});
res.json(messages);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function createMessageWithForeignKey(req, res) {
try {
const { body, freelancerId, jobOwnerId } = req.body;
const newMessage = await JobOwnerMessages.create({
    body,
    sender,
    reciever
});
res.status(201).json(newMessage);
} catch (error) {
res.status(500).json({ error: error.message });
}
}



async function FindMessageBySenderAndRecieverId(req, res) {
    try {
    const { sender , reciever } = req.params;
    const messages = await JobOwnerMessages.findAll({ where: { sender:sender , reciever:reciever },include:[
        {model:JobOwner,
            attributes: {
                exclude: ['updatedAt']
            }},
        {model:Freelancer}
    ] });
    
   
    
    res.status(200).json(messages);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
    }

const sortByCreatedAt = (a, b) =>
new Date(a.createdAt) - new Date(b.createdAt);

async function FindJobwnersBySenderId (req, res) {

    const { sender  } = req.params;
     FreelancerMessages.findAll({ where: { reciever:sender  } })
     .then((response) =>  {
        JobOwnerMessages.findAll({where : {sender:sender}})
        .then((ress)=>{
            const ids = response.map(message => message.dataValues.sender);
            const idss= ress.map(message => message.dataValues.reciever);
            const all=[...idss,...ids]
        const uniqueIds = [...new Set(all)];
        console.log(uniqueIds,"fklsglfd")
        const hhh=uniqueIds.map(async(index)=>{
           const req1 =await axios.get(`http://localhost:3000/freeMS/msg/${index}/${sender}`);
            const req2 =await axios.get(`http://localhost:3000/jobMS/msg/${sender}/${index}`);
            return (req1.data).concat(req2.data).sort(sortByCreatedAt)

      
        })
        const test=Promise.all(hhh).then((ress)=>{
            res.json(ress);
        })

        })
    })
    .catch ((error) =>{ res.status(500).send(error) })
    }


module.exports = {
  getAllMessages,
  createMessage,
  getMessageById,
  deleteMessageById,
  getAllMessagesWithDetails,
  createMessageWithForeignKey,
  FindMessageBySenderAndRecieverId,
  FindJobwnersBySenderId,
 
};



