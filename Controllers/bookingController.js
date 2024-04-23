import Booking from './../models/Booking.js'


// create new booking
export const createBooking = async (req, res) => {
   const newBooking = new Booking({
      userId: req.body.userId,
      userEmail: req.body.userEmail,
      tourName: req.body.tourName,
      fullName: req.body.fullName,
      guestSize: req.body.guestSize,
      phone: req.body.phone,
      bookAt: req.body.bookAt,
   })
   try {
      const savedBooking = await newBooking.save()

      res.status(200).json({ success: true, message: "Your tour is booked!", data: savedBooking })
   } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error!" })
   }
}

// get single booking
export const getBooking = async (req, res) => {
   const id = req.params.id

   try {
      const book = await Booking.findById(id)

      res.status(200).json({ success: true, message: "Successful!", data: book })
   } catch (error) {
      res.status(404).json({ success: true, message: "Not Found!" })
   }
}
//Delete Booking
export const deleteBooking = async (req, res) => {
   const id = req.params.id

   try {
      await Booking.findByIdAndDelete(id)

      res.status(200).json({ success: true, message: 'Successfully deleted' })
   } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to delete' })
   }
}

//Update Booking
export const updateBooking = async (req, res) => {
   const id = req.params.id

   try {
      const updatedBooking = await Booking.findByIdAndUpdate(id, {
         $set: req.body
      }, { new: true })

      res.status(200).json({ success: true, message: 'Successfully updated', data: updatedBooking })
   } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to update' })
   }
}

// get all booking
export const getAllBooking = async (req, res) => {

   try {
      const books = await Booking.find()

      res.status(200).json({ success: true, message: "Successful!", data: books })
   } catch (error) {
      res.status(500).json({ success: true, message: "Internal server error!" })
   }
}

// get booking by email
export const getBookingByUserId = async (req, res) => {
   const userId = req.params.userId;
   try {
      const book = await Booking.find({ userId });

      res.status(200).json({ success: true, message: "Successful!", data: book })
   } catch (error) {
      res.status(404).json({ success: false, message: "Not Found!" })
   }
}
