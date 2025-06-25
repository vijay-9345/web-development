import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://vijay824851:vijay08-JUL-06@cluster0.sj4wtkg.mongodb.net/sample_mflix')
        console.log('MongoDB connected')
    }catch(error){
        console.log(error)
    }
}