import mongoose, { Mongoose } from "mongoose";

const quoteSchema=new Mongoose.schema({
    name:{
        type: String,
        required:true
    },
    by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})


mongoose.model("Quote",quoteSchema)