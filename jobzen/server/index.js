const express = require('express')
const cors = require('cors')
const db = require('./database/index.js')
const app = express()
const { Server } = require('socket.io');
 const { createServer } = require('http')
 


//routes:
const admin = require('./routes/adminRoute.js');
const freelancer= require('./routes/freelancerRoute.js');
const jobOwner= require('./routes/jobOwnerRoute.js');

const messagesFreelacer = require('./routes/messagesRoute.js')
const messagesJobOwner = require('./routes/messagesJobRoutes.js')


const contactFreelancer = require('./routes/contactFreelancerRoute.js');
const contactJobOwner = require('./routes/contactJobOwnerRoute.js');
const contact = require('./routes/contactRouter.js');

const freelancerCategories = require('./routes/freelancerCategoriesRoute.js'); 
const freelancerHasCategories = require('./routes/freelancerHasCategoriesRoute.js');

const job= require('./routes/jobRoute.js');
const jobCategory = require('./routes/jobCategoryRoute.js');
const jobHasFreelancer = require('./routes/jobHasFreelancerRoute.js');
const review = require('./routes/reviewRoute.js')
const authenticated = require('./routes/auth.js')

const PORT = 3000
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../client/dist'))


//use route:
app.use('/admin', admin);
app.use('/freelancer', freelancer);
app.use('/jobOwner', jobOwner);

app.use('/freeMS', messagesFreelacer);
app.use('/jobMS', messagesJobOwner);
app.use('/contactFreelancer', contactFreelancer);
app.use('/contactJobOwner', contactJobOwner);

app.use('/freelancerCategories', freelancerCategories);
app.use('/freelancerHasCategories', freelancerHasCategories);

app.use('/job', job);
app.use('/jobCategory', jobCategory);
app.use('/jobHasFreelancer', jobHasFreelancer);
app.use('/review', review);
app.use('/auth', authenticated);
app.use('/contactUs', contact);



const server =  createServer(app);
const io = new Server(server, {cors :
  {
 methods: ['GET', 'POST' ] ,
 origin : 'https://localhost:3001'
}});


 io.on('connection',(socket)=> {
  console.log(`socket is connected ${socket.id}`);
  socket.on('send',(message)=>{
    console.log(`Recieced message${message}`)
    io.emit('recieved', message)
   });
  
   socket.on('disconnect',(socket)=> {
    console.log(`User disconnected${socket.id}`);
   }); 
 });





server.listen(3004, () => {
  console.log(`socket listening at http://localhost:3004`)
})
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})