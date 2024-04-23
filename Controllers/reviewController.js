import Tour from "../models/Tour.js"
import Review from "../models/Review.js"

export const createReview = async (req, res) => {
   const tourId = req.params.tourId
   const newReview = new Review({
      reviewText: req.body.reviewText,
      username: req.body.username,
      rating: req.body.rating,
   })
   try {
      const savedReview = await newReview.save()

      // after creating a new review now update the reviews array of the tour 
      await Tour.findByIdAndUpdate(tourId, {
         $push: { reviews: savedReview._id }
      })

      res.status(200).json({ success: true, message: "Review submitted", data: savedReview })
   } catch (error) {
      res.status(500).json({ success: false, message: "Failed to submit" })
   }
}

export const deteleReview = async (req, res) => {
   const reviewId = req.params.reviewId
   const tourId = req.params.tourId
   try {

      // after creating a new review now update the reviews array of the tour 
      await Tour.findByIdAndUpdate(tourId, {
         $pull: { reviews: reviewId }
      })

      res.status(200).json({ success: true, message: "Review delete success" })
   } catch (error) {
      res.status(500).json({ success: false, message: "Failed to delete" })
   }
}

export const AllReview = async (req, res) => {
   try {

      const review = await Review.find({})
      res.status(200).json({ success: true, count: review.length, message: 'Successfully', data: review })
   } catch (error) {
      res.status(500).json({ success: false, message: "Failed to delete" })
   }
}