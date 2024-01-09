const{ JobOwner }=require('../database/index.js');

// Get All job owners
async function getAllJobOwners(req, res) {
    try {
      const jobOwners = await JobOwner.findAll();
      res.json(jobOwners);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

//Get One Job Owner
const getOneJobOwner = async (req, res) => {
    const { id } = req.params;

    try {
      const jobOwner = await JobOwner.findByPk(id);

      if (!jobOwner) {

        return res.status(404).json('Job owner not found');
      }

      res.status(200).json(jobOwner);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  };

// Create a new job owner
async function createJobOwner(req, res) {
try {
    const { name, email, password, address, phone, image, rating, description } = req.body;
    const newJobOwner = await JobOwner.create({
    name,
    email,
    password,
    address,
    phone,
    image,
    rating,
    description
    });
    res.status(201).json(newJobOwner);
} catch (error) {
    res.status(500).json({ error: error.message });
}
}
  
// Update a job owner by ID
async function updateJobOwner(req, res) {
try {
    const { id } = req.params;
    const { name, email, password, address, phone, image, rating, description } = req.body;
    await JobOwner.update(
    { name, email, password, address, phone, image, rating, description },
    { where: { id } }
    );
    res.status(200).json({ message: 'Job owner updated successfully' });
} catch (error) {
    res.status(500).json({ error: error.message });
}
}
  
// Delete a job owner by ID
async function deleteJobOwner(req, res) {
try {
    const { id } = req.params;
    await JobOwner.destroy({ where: { id } });
    res.status(200).json({ message: 'Job owner deleted successfully' });
} catch (error) {
    res.status(500).json({ error: error.message });
}
}

module.exports = {getAllJobOwners,getOneJobOwner,createJobOwner,updateJobOwner,deleteJobOwner};