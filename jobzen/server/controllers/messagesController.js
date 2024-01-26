const { default: axios } = require('axios');
const{ FreelancerMessages, Freelancer, JobOwner ,JobOwnerMessages ,Job }=require('../database/index.js');
// CRUD operations
async function getAllMessages(req, res) {
try {
const messages = await FreelancerMessages.findAll();
res.json(messages);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function createMessage(req, res) {
try {
const newMessage = await FreelancerMessages.create(req.body);
res.status(201).json(newMessage);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function getMessageById(req, res) {
try {
const { id } = req.params;
const message = await FreelancerMessages.findByPk(id);

if (!message) {
    return res.status(404).json({ message: 'Message not found' });
}

res.json(message);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function deleteMessageById(req, res) {
try {
const { id } = req.params;
const deleted = await FreelancerMessages.destroy({ where: { id } });

if (!deleted) {
    return res.status(404).json({ message: 'Message not found' });
}

res.status(200).json({ message: 'Message deleted successfully' });
} catch (error) {
res.status(500).json({ error: error.message });
}
}

async function FindMessageBySenderAndRecieverId(req, res) {
    
        try {
            const { sender, reciever ,job} = req.params;
            const messages = await FreelancerMessages.findAll({
                where: { sender: sender, reciever: reciever ,idjob:job},
                
           
                include: [
                    { model: JobOwner },
                    { model: Freelancer,
                        attributes: {
                            exclude: ['updatedAt']
                        } },
                        {model :Job}
                ]
            });
    
            res.status(200).json(messages);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }}

        
    
    

    const sortByCreatedAt = (a, b) =>
    new Date(a.createdAt) - new Date(b.createdAt);
    
    async function FindJobwnersBySenderId (req, res) {
    
        const { sender , job } = req.params;
         FreelancerMessages.findAll({ where: { sender:sender ,idjob:job } })
         .then((response) =>  {
            JobOwnerMessages.findAll({where : {reciever:sender ,idjob:job}})
            .then((ress)=>{
                const ids = response.map(message => message.dataValues.reciever);
                const idss= ress.map(message => message.dataValues.sender);
                const all=[...idss,...ids]
            const uniqueIds = [...new Set(all)];
            const hhh=uniqueIds.map(async(index)=>{
               const req1 =await axios.get(`http://localhost:3000/freeMS/msg/${sender}/${index}/${job}`);
                const req2 =await axios.get(`http://localhost:3000/jobMS/msg/${index}/${sender}/${job}`);
                return (req1.data).concat(req2.data).sort(sortByCreatedAt)

          
            })
            const test=Promise.all(hhh).then((ress)=>{
                res.json(ress);
            })

            })
        })
        .catch ((error) =>{ res.status(500).send(error) })
        }

// CRUD operations with Foreign Keys

async function getAllMessagesWithDetails(req, res) {
try {
const messages = await FreelancerMessages.findAll({
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
const newMessage = await FreelancerMessages.create({
    body,
    sender,
    reciever
});
res.status(201).json(newMessage);
} catch (error) {
res.status(500).json({ error: error.message });
}
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


