import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  guestName: { type: String, required: true },
  roomName: { type: String, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  guests: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'Confirmed' }
});

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
