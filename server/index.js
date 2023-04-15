import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";
import postRotes from "./routes/posts.js";


const app=express();



app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())

app.use('/posts', postRotes);

const CONNECTION_URL ='mongodb+srv://memory:memory123@cluster5.nbckzmp.mongodb.net/?retryWrites=true&w=majority'
const PORT= 8000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>{console.log(`server running on PORT :${PORT}`)}))
.catch((error)=>console.log(error));

