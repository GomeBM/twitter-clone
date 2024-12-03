import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MONGO DB`);
  } catch (error) {
    console.error(`Error connecting to mongo DB: ${error.message}`);
    process.exit(1);
  }
};
