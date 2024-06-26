import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getAllTourNotLimit,
  getFeaturedTour,
  getSingleTour,
  getTourBySearch,
  getTourByTourName,
  getTourCount,
  updateTour,
} from "../Controllers/tourControllers.js";

import { verifyAdmin } from "../utils/authenticate.js";

const router = express.Router();

//Create new tour
router.post("/", /*verifyAdmin,*/ createTour);

//Update tour
router.put("/:id", /*verifyAdmin,*/ updateTour);

//Delete tour
router.delete("/:id", /*verifyAdmin,*/ deleteTour);

//Get single tour
router.get("/:id", getSingleTour);

//Get all tour
router.get("/", getAllTour);
router.get("/get/all", getAllTourNotLimit);

//Get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTour", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);
router.get("/search/getTourByTourName", getTourByTourName);
export default router;