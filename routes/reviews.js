import express from "express";
import { AllReview, createReview, deteleReview } from "../Controllers/reviewController.js";
import { verifyUser } from "../utils/authenticate.js";

const router = express.Router();

router.post("/:tourId", /*verifyUser,*/ createReview);
//Delete review
router.delete("/:tourId/reviewId/:reviewId", deteleReview);
router.get("/get/all", AllReview);
export default router;
