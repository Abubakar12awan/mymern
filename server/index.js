import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import postRoutes from"./routes/post.js"
const app=express()
app.use('/posts',postRoutes);
app.use(bodyParser.json({limit:"30mb",extended:true }))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true }))
app.use(cors());
const URL="mongodb+srv://baaz:aja@cluster0.burxowp.mongodb.net/?retryWrites=true&w=majority"
const PORT=process.env.PORT ||5000;
mongoose.connect(URL,{
    // useNewUrlParser: true,useUnifiedTopoloy:true
}).then(()=>
app.listen(PORT,()=>console.log(`server is running on port${PORT}`))
).catch((error)=>{
    console.log(error.message)

})
// mongoose.set("useFindAndModify",false)