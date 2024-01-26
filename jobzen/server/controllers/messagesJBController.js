const { default: axios } = require('axios');

const{ JobOwnerMessages, Freelancer, JobOwner ,FreelancerMessages ,Job}=require('../database/index.js');

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
    const { sender , reciever ,job} = req.params;
    const messages = await JobOwnerMessages.findAll({ where: { sender:sender , reciever:reciever ,idjob:job },include:[
        {model:JobOwner,
            attributes: {
                exclude: ['updatedAt']
            }},
        {model:Freelancer},
        {model :Job}
    ] });
    
   
    
    res.status(200).json(messages);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
    }
    async function FindMessageBySenderAndRecieverId1(req, res) {
        try {
        const { sender ,job } = req.params;
        const jobowner = await JobOwnerMessages.findAll({ where: { sender:sender  ,idjob:job},attributes:["reciever"] });
        const freelancer = await FreelancerMessages.findAll({
            where: { reciever: sender  ,idjob:job },
        attributes: ["sender"]       
    
        });
       
        
        res.status(200).send([...jobowner,...freelancer]);
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
        }

const sortByCreatedAt = (a, b) =>
new Date(a.createdAt) - new Date(b.createdAt);

async function FindJobwnersBySenderId (req, res) {

    const { sender ,job } = req.params;
     FreelancerMessages.findAll({ where: { reciever:sender ,idjob:job } })
     .then((response) =>  {
        JobOwnerMessages.findAll({where : {sender:sender ,idjob:job}})
        .then((ress)=>{
            const ids = response.map(message => message.dataValues.sender);
            const idss= ress.map(message => message.dataValues.reciever);
            const all=[...idss,...ids]
        const uniqueIds = [...new Set(all)];
        console.log(uniqueIds,"fklsglfd")
        const hhh=uniqueIds.map(async(index)=>{
           const req1 =await axios.get(`http://localhost:3000/freeMS/msg/${index}/${sender}/${job}`);
            const req2 =await axios.get(`http://localhost:3000/jobMS/msg/${sender}/${index}/${job}`);
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
  FindMessageBySenderAndRecieverId1
};



