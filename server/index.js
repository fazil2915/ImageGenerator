import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import connectDb from "./models/connect.js"
import postRoute from"./routes/postRoute.js"
import dalleRoute from"./routes/dalleRoute.js"
dotenv.config();

const app=express();
app.use(cors())
app.use(express.json({limit:'50mb'}));


app.use("/api/v1/postRoute",postRoute);
app.use("/api/v1/dalleRoute",dalleRoute)

app.get('/',async (req,res)=>{
    res.send("hai there")
})

const startServer=async()=>{

    try{
        connectDb(process.env.MONGO_URL)
        app.listen(3000,()=>{
            console.log("server running on port http://localhost:3000")
        })
    }
    catch(err){
       console.log(err)
    }

}
startServer()