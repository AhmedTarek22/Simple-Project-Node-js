
import express from "express";
import { dbConnect } from "./db/dbConnection.js";
import userRoutes from "./src/modules/user/user.routes.js";
import noteRoutes from "./src/modules/note/note.routes.js";

const app = express();

app.use(express.json());

dbConnect

app.use(userRoutes);
app.use(noteRoutes);


app.listen(3000,()=>{
    console.log("Server running");
})