import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'your-mongo-uri-here';

export const connectMongo = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw new Error('Database connection failed');
  }
};
