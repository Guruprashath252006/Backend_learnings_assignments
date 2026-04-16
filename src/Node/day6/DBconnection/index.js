import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";


dotenv.config();

connectDB()
const app = express();


app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server connected on http://localhost:${PORT}`);
})


