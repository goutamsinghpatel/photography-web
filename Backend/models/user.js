import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema= new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user",

    },
},    {timestamps:true},

)
const userModel =  mongoose .models.user ||mongoose.model("prabhat-user",userSchema);
export default userModel;