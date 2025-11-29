import mongoose from "mongoose";
const Schema=mongoose.Schema;
const imageSchema=new Schema({
    url: {
        type: String,
        required: true,
    },
    filename: {
        type: String, 
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "prabhat-user", 
        required: true,
    },
    section: {
        type: String,
        enum: ["main", "haldi", "mehndi", "sangeet", "other", "barat"],
        default: "other",
    }
})
const imageModel=mongoose.models.image ||mongoose.model("prabhat-image",imageSchema);
export default imageModel