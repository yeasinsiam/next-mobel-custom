import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

//connectDBFromApi will work as middleware
// const connectDBFromApi = (handler) => async (req, res) => {
//   if (mongoose.connections[0].readyState) {
//     // Use current db connection
//     return handler(req, res);
//   }
//   // Use new db connection
//   await mongoose.connect(
//     process.env.MONGODB_URI

//     //     {
//     //     useNewUrlParser: true,
//     //     useUnifiedTopology: true,
//     //     useCreateIndex: true,
//     //     useFindAndModify: false,
//     //   }
//   );
//   return handler(req, res);
// };

const connectDBFromApi = (handler) => async (req, res) => {
  if (cached.conn) {
    return handler(req, res);
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return handler(req, res);
};

const connectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    // const opts = {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   bufferCommands: false,
    //   bufferMaxEntries: 0,
    //   useFindAndModify: true,
    //   useCreateIndex: true
    // }

    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

export { connectDBFromApi, connectDB };
