import userModel from "../../../db/models/users/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendEmail from "../../email/email.js";
import catchError from "../../middleware/catchError.js";

const getUser = async (req, res) => {
  let users = await userModel.find();
  users.password = undefined;
  res.json({ message: "done", users });
};

const signUp = catchError(async (req, res) => {
  let addUser = await userModel.insertMany(req.body);
  addUser[0].password = undefined;
  sendEmail(req.body.email);
  res.json({ message: "done added user", addUser });
})

const signIn = catchError(async(req,res) =>{
  let foundedUser = await userModel.findOne({email: req.body.email});
  if(!foundedUser) return res.json({message: "email not valid"});
  let matched = bcrypt.compareSync(req.body.password,foundedUser.password);
  if(!matched) return res.json({message: "password not valid"});
  foundedUser.password = undefined;

  if(foundedUser.isConfirmed == false)
    return res.json({message: "you should veify your acount"})

  const token = jwt.sign({_id: foundedUser._id,email: req.body.email,role:foundedUser.role},"userToken");
  res.json({message: "welcome", token});
})

const verifyEmail = (req,res) =>{

  jwt.verify(req.params.token,"testEmail", async(err,decoded)=>{
    if(err) return res.json({message: "invalid token",err});

    await userModel.findOneAndDelete({email:decoded},{isConfirmed: true})
    res.json({message: "done"});

  })
}

export {
  getUser,
  signUp,
  signIn,
  verifyEmail,
};
