import express from "express";
import {
  createBooking,
  deleteBooking,
  getAllBooking,
  getBooking,
  getBookingByUserId,
  updateBooking,
} from "../Controllers/bookingController.js";
import { verifyAdmin, verifyUser } from "../utils/authenticate.js";

const router = express.Router();

router.post("/", createBooking);
//Delete tour
router.delete("/:id", deleteBooking);
//Update booking
router.put("/:id", /*verifyAdmin,*/ updateBooking);

router.get("/:id", verifyUser, getBooking);
router.get("/", verifyAdmin, getAllBooking);
router.get("/byUserId/:userId", getBookingByUserId);
export default router;
