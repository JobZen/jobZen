const config = require("./config.js");
const { Sequelize,DataTypes, STRING } = require('sequelize');

const sequelize = new Sequelize(
  config.database,
  config.user,
  config.password,
  {
    host: config.host,
    dialect: "mysql",
  }
);

//table freelancer 1
const Freelancer = sequelize.define('freelancer', {
 
  name: { 
    type: DataTypes.STRING,
    allowNull : false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull : false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull : false,
  },
  adress: {
    type: DataTypes.STRING,
     allowNull : false,
  },
  phone: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  image: {
    type: DataTypes.TEXT('long'),
     allowNull : false,
  },
  skills: {
    type: DataTypes.TEXT('long'),
     allowNull : false,
  },
  aboutMe: {
    type: DataTypes.TEXT('long'),
     allowNull : false,
  },
  experience: {
    type: DataTypes.TEXT('long'),
     allowNull : false,
  },
  jobtitle: {
    type: DataTypes.TEXT('long'),
     allowNull : false,
  }
});

//table job Owner 2
const JobOwner = sequelize.define('jobowner', {

  name: {
    type: DataTypes.STRING,
     allowNull : false,
  },
  email: {
    type: DataTypes.STRING,
     allowNull : false,
  },
  password: {
    type: DataTypes.STRING,
     allowNull : false,
  },
  adress: {
    type: DataTypes.STRING,
     allowNull : false,
  },
  phone: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  image: {
    type: DataTypes.TEXT('long'),
     allowNull : false,
  },
  rating: {
    type: DataTypes.FLOAT,
    defaultValue:0,
  },
  description: {
    type: DataTypes.TEXT('long'),
     allowNull : false,
  },
});

//table admin: 3
const Admin = sequelize.define('admin', {

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT('long'),
  },
});

//table job: 4
const Job = sequelize.define('job', {

jobtitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  budget: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue:0
  },
  image: {
    type: DataTypes.TEXT('long'),
  },
  role: {
    type: DataTypes.TEXT('long'),
  },
  description: {
    type: DataTypes.TEXT('long'),
  },
  qualification: {
    type: DataTypes.TEXT('long'),
  },
});

//table job category: 5
const JobCategory = sequelize.define('jobCategory', {
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT('long'),
  }
});

//table Freelancer categories: 6
const FreelancerCategories = sequelize.define('freelacerCategory', {

  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT('long'),
  }
});

//table review: 7
const Review = sequelize.define('review', {
 name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT('long'),
  }
});

 // table of accepted freelancer to do the job: 8
const JobHasFreelancer = sequelize.define('job_has_freelancer', {
  states: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});

//job owner contacts Admin // 9
const ContactJobOwner = sequelize.define('contact_jobOwner', {
 email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  }
});

//Freelancer contacts Admin // 10
const ContactFreelancer = sequelize.define('contact_freelancer', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  }
});

// Freelancer has many categories //11
const FreelancerHasCategories = sequelize.define('freelancer_has_manyCategories', {
});

// Messages  //12
const Messages = sequelize.define("messages" , {
 body : {
  type : DataTypes.TEXT("long"),
  allowNull : false
 }
})

FreelancerHasCategories.belongsTo(Freelancer, {
  foreignKey: 'FreeLancerId', 
  allowNull: false,
})
FreelancerHasCategories.belongsTo(FreelancerCategories, {
  foreignKey: 'FreeLancerCategoriesId', 
  allowNull: false,
})



Job.belongsTo(JobOwner, {
  foreignKey: 'jobOwnerId',
  allowNull: false,
});

Job.belongsTo(JobCategory, {
  foreignKey: 'jobCategoryId',
  allowNull: false,
});



Messages.belongsTo(Freelancer , {foreignKey : "freelancerId",
allowNull: false})

Messages.belongsTo(JobOwner , {foreignKey : "jobOwnerId",
allowNull: false
})



Review.belongsTo(JobHasFreelancer , {foreignKey : 'jobHasFreelancerId' ,
allowNull: false})


ContactFreelancer.belongsTo(Freelancer)
ContactJobOwner.belongsTo(JobOwner)

JobHasFreelancer.belongsTo(Job, {foreignKey:'jobId',allowNull:false})
JobHasFreelancer.belongsTo(Freelancer, {foreignKey:'freelancerId',allowNull:false})

// sequelize.authenticate() 
//   .then(() => {
//     console.log('Database connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   });
//   sequelize.sync()
//   .then(() => {
//     console.log('Database and tables synchronized.');
//   })
//   .catch((error) => {
//     console.error('Error synchronizing the database:', error);

//   }); 
//   });



module.exports = {
  Freelancer,JobOwner,Admin,Job,
  JobCategory,FreelancerCategories,
  Review,JobHasFreelancer,ContactJobOwner,
  ContactFreelancer,FreelancerHasCategories,Messages}
