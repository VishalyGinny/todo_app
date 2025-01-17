import mongoose from "mongoose";
// This code connects to the MongoDB database using Mongoose.
// Define an asynchronous function to connect to MongoDB
const connenctMongoDB = async () => {
    try {
    // Attempt to connect to MongoDB using the connection string from the environment variable
    // If the environment variable is not set, use a default connection string
    await mongoose.connect(process.env.MONGODB_URI || 'your_default_mongodb_uri');
    console.log('Connected to MongoDB');
    }catch (error) {
        // Log any errors that occur during the connection attempt
        console.log(error);
    }
};
// Export the connectMongoDB function as the default export of the module
export default connenctMongoDB;