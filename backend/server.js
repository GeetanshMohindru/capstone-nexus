import express from "express";
import cors from "cors";
import connectToDB from "./configs/db-config.js";
import dotenv from "dotenv";
// import Router from "./routes/route-index.js";
import routes from "./routes/route-index.js";
dotenv.config();

connectToDB();
const app = express();
const PORT= process.env.PORT;

//Custom headers maybe
//Middleware
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/',routes);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});