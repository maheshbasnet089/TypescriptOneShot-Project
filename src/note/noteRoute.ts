import express from 'express'
import { createNote, deleteNote, listNote, listNotes } from './noteController'

const noteRoute = express.Router()
import {multer,storage} from "./../middlewares/multerMiddleware"
const upload = multer({storage : storage})

noteRoute.route("/")
.post(upload.single('file'),createNote)
.get(listNotes)

noteRoute.route("/:id")
.get(listNote)
.delete(deleteNote)


export default noteRoute