import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["pending", "ongoing", "completed"],
    default: "pending",
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  priority:{
    type:String,
    enum:["Low","Medium","High"],
    default:"Low"
  },
  dueDate:{
    type:String,

  }
},{timestamps:true});

const todo = mongoose.model("Todo",todoSchema);
export default todo
