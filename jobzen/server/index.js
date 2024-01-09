const express = require('express')
const db = require('./database/index.js')
const JobOwnerRouter=require('./routes/jobOwnerRoutes.js')
const PORT = 3000
const app = express()
const cors = require('cors')

//routes:
const admin = require('./routes/adminRoute.js');
const freelancer= require('./routes/freelancerRoute.js');
const jobOwner= require('./routes/jobOwnerRoute.js');

const messages = require('./routes/messagesRoute.js')
const contactFreelancer = require('./routes/contactFreelancerRoute.js');
const contactJobOwner = require('./routes/contactJobOwnerRoute.js');

const freelancerCategories = require('./routes/freelancerCategoriesRoute.js');
const freelancerHasCategories = require('./routes/freelancerHasCategoriesRoute.js');

const job= require('./routes/jobRoute.js');
const jobCategory = require('./routes/jobCategoryRoute.js');
const jobHasFreelancer = require('./routes/jobHasFreelancerRoute.js');
const review = require('./routes/reviewRoute.js')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../client/dist'))
app.use('/api/jobOwner',JobOwnerRouter)

//use route:
app.use('/admin', admin);
app.use('/freelancer', freelancer);
app.use('/jobOwner', jobOwner);

app.use('/messages', messages);
app.use('/contactFreelancer', contactFreelancer);
app.use('/contactJobOwner', contactJobOwner);

app.use('/freelancerCategories', freelancerCategories);
app.use('/freelancerHasCategories', freelancerHasCategories);

app.use('/job', job);
app.use('/jobCategory', jobCategory);
app.use('/jobHasFreelancer', jobHasFreelancer);
app.use('/review', review);


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})