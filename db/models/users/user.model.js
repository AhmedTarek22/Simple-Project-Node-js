import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: String,
    age: Number,
    password: String,
    age: {
      type: Number,
      min: 5
    },

    isConfirmed:{
      type: Boolean,
      default: false
    },

    role: {
      type: String,
      enum: ['admin','user'],
      default: 'user'
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const userModel = model("User",userSchema);

export default userModel;