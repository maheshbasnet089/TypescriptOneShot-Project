import express from 'express'
import { createNote } from './noteController'

const noteRoute = express.Router()

noteRoute.route("/").post(createNote)


export default noteRoute