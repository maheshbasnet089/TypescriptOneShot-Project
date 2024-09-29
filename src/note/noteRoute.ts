import express from 'express'
import { createNote } from './noteController'

const noteRoute = express.Router()
import {multer,storage} from "./../middlewares/multerMiddleware"
const upload = multer({storage : storage})

noteRoute.route("/").post(upload.single('file'),createNote)


export default noteRoute