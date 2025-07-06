// lib/mongodb.js
import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI; // from .env.local
const MONGODB_URI= "mongodb+srv://simran:rohit776@cluster0.8t0hk4y.mongodb.net/rohitdbs"

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI in .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: '', // optional
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}



const conDb=(uri)=>{ mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(console.log("db connected !")).catch(e=>{console.log(e)})}
  
