import { noteModel } from "../../../db/models/notes/note.model.js";
import jwt from "jsonwebtoken";

const getNotes = async (req, res) => {
  let notes = await noteModel.find({createdBy: req.user._id}).populate("createdBy");
  res.json({ message: "getNotes done", notes });
};

const addNote = async (req, res) => {
  req.body.createdBy = req.user._id;
  let addNote = await noteModel.insertMany(req.body);
  res.json({ message: "addNote done", addNote });
};

const apdateNote = async (req, res) => {
  let updateNote = await noteModel.findByIdAndUpdate({_id: req.params.id,createdBy: req.user._id},{new: true});
  res.json({ message: "updateNote done", updateNote });
};

const deleteNote = async (req, res) => {
  let deleteNote = await noteModel.findOneAndDelete({_id: req.params.id,createdBy: req.user._id});
  res.json({ message: "deleteNote done" });
};

export { getNotes, addNote, apdateNote, deleteNote };
