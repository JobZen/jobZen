const router = require('express').Router();
const Review = require('../controllers/reviewController');

// GET all reviews
router.get('/review', Review.getAllReviews);

// Create a new review
router.post('/review', Review.createReview);

// Get a review by ID
router.get('/job/review/:id', Review.getReviewById);

// Update a review by ID
router.put('/review/:id', Review.updateReview);

// Delete a review by ID
router.delete('/review/:id', Review.deleteReview);

// GET all reviews with details (including JobHasFreelancer)
router.get('/reviews/detail', Review.getAllReviewsWithDetails);

// Get reviews by JobFreelancer ID
router.get('/review/jobFreelancer/:jobFreelancerId', Review.getReviewsByJobFreelancer);

// Get average rating by JobFreelancer ID
router.get('/review/jobFreelancer/:jobFreelancerId/averageRating', Review.getAverageRatingByJobFreelancer);

// Get review count by JobFreelancer ID
router.get('/review/jobFreelancer/:jobFreelancerId/count', Review.getReviewCountByJobFreelancer);

module.exports = router;
