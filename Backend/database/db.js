import dns from "dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);
 import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:'Restaurant',
 }).then(()=>{
    console.log('Connected to Database successfully');
 }).catch((err)=>{
    console.log(`Some error occurred while connecting to database! ${err}`);
 });
};