import { Router } from "express";
import societyRouter from "./society.routes.js"
import societyCategoryRouter from "./societyCategory.routes.js"
import logger from "../utils/logger.js";
import exploreRouter from "./explorePage.routes.js";
const routes=new Router();


//REDIRECT TO ALL MAJOR PAGE ROUTES
routes.get('/', (req, res) => {
  logger.info(`${req.method} ${req.originalUrl} | Visited Home page | Success`);
  res.send(`
    <h2>Welcome to TIET-Nexus</h2>
    <p>Visit official site here: <a href="https://tietnexus.vercel.app/" target="_blank">https://tietnexus.vercel.app/</a></p>
  `);
});
routes.use('/api/explore',exploreRouter);
routes.use('/api/society',societyRouter);
routes.use('/api/society/categories', societyCategoryRouter);
export default routes;

