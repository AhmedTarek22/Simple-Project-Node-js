import userModel from "../../db/models/users/user.model.js";
import bcrypt from "bcrypt";


export const checkEmail = async (req, res, next) => {
  let userFounded = await userModel.findOne({email: req.body.email});
  if(userFounded) return res.json({message: "user already register"});

  req.body.password = bcrypt.hashSync(req.body.password , 8);
  next();
};
