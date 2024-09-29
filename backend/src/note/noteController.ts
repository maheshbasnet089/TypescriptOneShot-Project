import { NextFunction, Request, Response } from "express";
import noteModel from "./noteModel";
import envConfig from "../config/config";
import createHttpError from "http-errors";



const createNote = async (req:Request,res:Response,next:NextFunction)=>{
   try {
    const file = req.file ? `${envConfig.backendUrl}/${req.file.filename}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGdn5ODMa1UxSL5a172LJpZn6EjIX5THCdmA&s'
    const {title,subtitle,description} = req.body 
    if(!title || !subtitle || !description ){
        res.status(400).json({
            message : "Please provide title,subtitle,description"
        })
        return
    }
    await noteModel.create({
        title, 
        subtitle, 
        description , 
        file
    })
    res.status(201).json({
        message : "Note created !"
    })
   } catch (error) {
    console.log(error)
    return next(createHttpError(500,'Error while creating'))
   }
}

const listNotes = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const notes = await noteModel.find()
        res.status(200).json({
            message : "Notes fetched", 
            data : notes
        })
    } catch (error) {
        return next(createHttpError(500,"Error while fetching..."))
    }
}

const deleteNote = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const {id} = req.params
         await noteModel.findByIdAndDelete(id)
        res.status(200).json({
            message : "Notes delete", 
        })
    } catch (error) {
        return next(createHttpError(500,"Error while fetching..."))
    }
}

const listNote = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const {id} = req.params
        const note = await noteModel.findById(id)
        if(!note){
            return next(createHttpError(404, "Note not found with that id!"))
        }
        res.status(200).json({
            message : "Notes fetched", 
            data : note
        })
    } catch (error) {
        return next(createHttpError(500,"Error while fetching..."))
    }
}

export {createNote,listNote,listNotes,deleteNote}