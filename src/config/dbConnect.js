import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/capgemini-test");

let db = mongoose.connection;

export default db;
