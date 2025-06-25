import express from 'express'
import mongoose from 'mongoose'
import { connectDB } from './config/db.js'
import User from './model/user.js'
import dotenv from 'dotenv'
dotenv.config()
const app=express()

connectDB()

app.use(express.urlencoded())

app.get('/get',async(req,res)=>{
    const user= await User.find()
    res.json(user)
})
app.post('/post',async(req,res)=>{
    try{
        const newUser=new User(req.body)
        await newUser.save()
        res.send('from post')
    } catch (error){
        res.status(401).json(error)
    }
})
app.put('/put',(req,res)=>{
    res.send('from put')
})
app.patch('/patch',(req,res)=>{
    res.send('from patch')
})
app.delete('/delete',(req,res)=>{
    res.send('from delete')
})
app.listen(3000,()=>{
    console.log('Server running on port 3000')
})