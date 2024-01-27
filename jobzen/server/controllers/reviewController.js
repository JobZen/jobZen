const{Review,JobHasFreelancer}=require('../database/index.js');

//Get All reviews:
async function getAllReviews(req, res) {
try {
    const reviews = await Review.findAll();
    res.json(reviews);
} catch (error) {
    res.status(500).json({ error: error.message });
}
}

//Create a new review:
async function createReview(req, res) {
try {
    const {ownerId , description,freelancerId  } = req.body;
    const newReview = await Review.create({
    description,
    ownerId,
    freelancerId
    });
    res.status(201).json(newReview);
} catch (error) {
    res.status(500).json({ error: error.message });
}
}

//Get One Review by ID:
async function getReviewById(req, res) {
try {
    const { id } = req.params;
    const review = await Review.findAll({where:{ownerId:id}});

    res.json(review);
} catch (error) {
    res.status(500).json({ error: error.message });
}
}

//Edit review by ID:
async function updateReview(req, res) {
try {
    const { id } = req.params;
    const { name, description, jobHasFreelancerId } = req.body;
    const [updated] = await Review.update(
    { name, description, jobHasFreelancerId },
    { where: { id } }
    );

    if (!updated) {
    return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json({ message: 'Review updated successfully' });
} catch (error) {
    res.status(500).json({ error: error.message });
}
}

//Delete one review:  
async function deleteReview(req, res) {
try {
    const { id } = req.params;
    const deleted = await Review.destroy({ where: { id } });

    if (!deleted) {
    return res.status(404).json({ message: 'Review not found' });
    }

    res.status(200).json({ message: 'Review deleted successfully' });
} catch (error) {
    res.status(500).json({ error: error.message });
}
}

//Get All Reviews related to Job-Freelancer:
async function getAllReviewsWithDetails(req, res) {
    try {
      const reviews = await Review.findAll({
        include: [
          { model: JobHasFreelancer }
        ]
      });
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

//Get Reviews for a Specific Job-Freelancer:
async function getReviewsByJobFreelancer(req, res) {
try {
  const { jobFreelancerId } = req.params;
  const reviews = await Review.findAll({
    where: { jobHasFreelancerId: jobFreelancerId }
  });
  res.json(reviews);
} catch (error) {
  res.status(500).json({ error: error.message });
}
}

//Get Average Rating for a Specific Job-Freelancer Relation:
async function getAverageRatingByJobFreelancer(req, res) {
try {
  const { jobFreelancerId } = req.params;
  const averageRating = await Review.findOne({
  attributes: [
    [sequelize.fn('AVG', sequelize.col('rating')), 'averageRating']
  ],
  where: { jobHasFreelancerId: jobFreelancerId }
  });
  res.json(averageRating);
} catch (error) {
  res.status(500).json({ error: error.message });
}
}

//Get Number of Reviews for a Specific Job-Freelancer Relation:
async function getReviewCountByJobFreelancer(req, res) {
try {
  const { jobFreelancerId } = req.params;
  const reviewCount = await Review.count({
  where: { jobHasFreelancerId: jobFreelancerId }
  });
  res.json({ reviewCount });
} catch (error) {
  res.status(500).json({ error: error.message });
}
}
  
module.exports = {
  getAllReviews,createReview,getReviewById,
  updateReview,deleteReview,
  getAllReviewsWithDetails,
  getReviewsByJobFreelancer,
  getAverageRatingByJobFreelancer,
  getReviewCountByJobFreelancer};
