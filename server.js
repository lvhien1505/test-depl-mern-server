const express=require("express");
const cors=require("cors");


const app=express();

app.use(cors());

app.get("/test",(req,res)=>{
    res.json({
        name:"Hien",
        age:"22"
    })
})

app.post("/oke",(req,res)=>{
    res.json({
        status:true
    })
})

app.listen(5000,()=>{
    console.log("port server")
})