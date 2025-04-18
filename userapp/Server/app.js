const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const dbConnect=require("./config/db");
const userroute=require("./Routes/userRoutes");
dotenv.config();
const app=express();
const Port=process.env.PORT || 3000;
dbConnect();
app.use(cors);
app.use(express.json());
app.use("/",userroute);
app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`)
})
