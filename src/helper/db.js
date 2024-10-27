import mongoose from "mongoose"
import {User} from "../models/user";

export const connectDb = async ()=>{
   try {
    const {connection} = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "work_manager"
        })       
        console.log("db connected...");
      //   console.log(connection)

   //    //testing and creating new user
   //  const uuser = new User({
   //       name: "Anu",
   //       email: "Anu123@gmail.com",
   //       password: "testpassword",
   //       about: "This is testing"
   //    });
   // await uuser.save();

   console.log("user is created")

   } catch (error) {
    console.log("failed to connect with database");
    console.log(error);
   }
}