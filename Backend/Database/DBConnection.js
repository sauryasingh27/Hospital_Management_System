import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "hms_db",
    })
    .then(() => {
      console.log("Connected to database!", mongoose.connection.name);
    })
    .catch((err) => {
      console.log("Error occured while connecting to database:", err);
    });
};
