import express from "express";
import cors from "cors";
import connectToDB from "./configs/db-config.js";
import dotenv from "dotenv";
import routes from "./routes/route-index.js";
import { errorHandler } from "./middleware/error-handler.js";
dotenv.config();

const app = express();
const PORT= process.env.PORT;
//DB CONNECTION FUNCTION CALLED
connectToDB();


//Custom headers maybe

//Middleware
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// ROUTES
app.use('/',routes);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});