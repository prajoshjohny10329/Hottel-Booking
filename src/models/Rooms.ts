// models/Room.ts
import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }, // URL of the room image
  capacity: { type: Number, required: true },
  numberOf: { type: Number, required: true },
});

export default mongoose.models.Room || mongoose.model('Rooms', RoomSchema);
