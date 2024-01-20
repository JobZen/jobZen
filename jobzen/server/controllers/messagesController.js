const{ FreelancerMessages, Freelancer, JobOwner ,JobOwnerMessages }=require('../database/index.js');

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
    const { sender , reciever } = req.params;
    const messages = await FreelancerMessages.findAll({ where: { sender:sender , reciever:reciever } });
    

    res.status(200).json(messages);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
    }


  

    async function FindJobwnersBySenderId (req, res) {
    
        const { sender  } = req.params;
         FreelancerMessages.findAll({ where: { sender:sender  } })
         .then((response) =>  {
            const ids = response.map(message => message.dataValues.reciever);
            const sortByDate = response.sort(sortByCreatedAt)
            const uniqueIds = [...new Set(ids)];
          const JBmessages =  uniqueIds.map( async (id)=> {try {
                return JobOwnerMessages.findAll({ where: { sender:id ,reciever:sender} })
            } catch (error) {
                res.status(405).send(error)
            }    })
            const FreeMessages =  uniqueIds.map( async (id)=> {try {
                return FreelancerMessages.findAll({ where: { sender:sender ,reciever:id} })
            } catch (error) {
                res.status(405).send(error)
            }    })
            const ttt=  Promise.all(JBmessages).then((ress)=>{   
                const ppp = ress.reduce((acc,el)=>(
                    acc=acc.concat(el[el.length-1])
                ),[])
                JobOwner.findAll({ where: { id:uniqueIds} })
                .then((response) => {
                     for (let i = 0; i < response.length; i++) {
                  response[i].dataValues.msg=ppp[i] } 
                   res.status(200).json(response);console.log(response)})
                .catch((err)=> {res.status(501).send(err)})

            })
          
        })
        .catch ((error) =>{ res.status(500).send(error) })

        }

        
    async function FindFreelancerBySenderId (req, res) {
    
        const { sender  } = req.params;
         FreelancerMessages.findAll({ where: { sender:sender  } })
         .then((response) =>  {
            const ids = response.map(message => message.dataValues.reciever);
            const uniqueIds = [...new Set(ids)];
            const FreeMessages =  uniqueIds.map( async (id)=> {try {
                return FreelancerMessages.findAll({ where: { sender:sender ,reciever:id},
                    attributes: {exclude: ['updatedAt']} }
                    )
            } catch (error) {
                res.status(405).send(error)
            }    })
            const ttt=  Promise.all(FreeMessages).then((ress)=>{   
                const ppp = ress.reduce((acc,el)=>(
                    acc=acc.concat(el[el.length-1])
                ),[])
                JobOwner.findAll({ where: { id:uniqueIds} })
                .then((response) => {
                     for (let i = 0; i < response.length; i++) {
                  response[i].dataValues.msg=ppp[i] } 
                   res.status(200).json(response);console.log(response)})
                .catch((err)=> {res.status(501).send(err)})

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
  FindFreelancerBySenderId
};


