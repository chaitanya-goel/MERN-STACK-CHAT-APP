import mongoose from "mongoose";
const connectDB = async () => {
  try {
      const uri = process.env.MONGODB_URI;
      if (!uri) {
          throw new Error("MONGODB_URI is not defined in the environment variables.");
      }
      const conn = await mongoose.connect(uri);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
      console.error("MongoDB connection error:", error.message); 
      process.exit(1); // Exit the application if the DB connection fails
  }
};
export default connectDB;