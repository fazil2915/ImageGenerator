import express from "express"
import * as dotenv from "dotenv"
import OpenAI from "openai"



dotenv.config();

const router=express.Router();

const openai=new OpenAI({
    apikey:process.env.OPENAI_API_KEY,
});

router.route('/').get((req,res)=>{
    res.send("hai there its dalle");
})

export default router;