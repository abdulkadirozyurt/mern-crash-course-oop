import mongoose from "mongoose";

export default class MongoDbConfig {
  public static ConnectDb() {
    const mongoURI = process.env.MONGO_URI || "";
    // const url = new URL(mongoUri);

    mongoose
      .connect(mongoURI, {
        dbName: "mern-crash-course-oop",
      })
      .then(() => {
        // console.log(`mongodb connection successfully: ${url.hostname}`);
        console.log(`mongodb connection successfully established`);
      })
      .catch((err) => {
        console.error(err.message);
        process.exit(1); // 1 means failure, 0 means success
      });
  }
}
