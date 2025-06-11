import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database connected.")
    );

    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error(`Error connecting to db ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
