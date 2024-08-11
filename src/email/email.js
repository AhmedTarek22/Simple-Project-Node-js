import nodemailer from ""
import { template } from "./emailTemplate.js";
import jwt from "jsonwebtoken";

export default async function sendEmail(email){
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ahmedtarekabdo22@gmail.com",
      pass: "hvbq syxw jfsq ebpn",
    },
  });
  
    const emailToken = jwt.sign(email,"testEmail")
    const info = await transporter.sendMail({
      from: '"Note app 👻" <ahmedtarekabdo22@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: template(emailToken), // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}


