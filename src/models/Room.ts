import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  capacity: { type: Number, required: true },
  description: { type: String, required: true },
  available: { type: Boolean, default: true },
});

export default mongoose.models.Room || mongoose.model('Room', RoomSchema);
