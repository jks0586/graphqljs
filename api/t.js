
import mongoose from "mongoose";
import  { MONGODB_URL }  from './src/config.js'
mongoose.connect(MONGODB_URL,{})
mongoose.connection.on("connected",()=>{
    console.log('connected to mongodb');
})
mongoose.connection.on("error",(err)=>{
    console.log("error connection",err)
})
import './src/models/User.js';
import './src/models/Quote.js';
const User = mongoose.model("User");
const user = await User.findOne({email:'jks0586@gmail.com'})
console.log(user)
import Jwt from 'jsonwebtoken';

const token = Jwt.sign({ foo: 'bar' }, 'shhhhh');


console.log(token);