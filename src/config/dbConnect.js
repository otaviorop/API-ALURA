import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:123@cluster0.ckwp9.mongodb.net/alura-node");


let db = mongoose.connection;

export default db;