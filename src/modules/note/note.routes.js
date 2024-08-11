import express from "express";
import {
  addNote,
  apdateNote,
  deleteNote,
  getNotes,
} from "./note.controller.js";
import { verifyToken } from "../../middleware/verifyToken.js";

const noteRoutes = express.Router();

noteRoutes.use(verifyToken);
noteRoutes.get("/notes", getNotes);

noteRoutes.post("/note", addNote);

noteRoutes.put("/note/:id", apdateNote);

noteRoutes.delete("/note/:id", deleteNote);

export default noteRoutes;
