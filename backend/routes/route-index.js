import { Router } from "express";

const routes=new Router();


//REDIRECT TO ALL MAJOR PAGE ROUTES
routes.get('/', (req, res) => {
  res.send(`
    <h2>Welcome to TIET-Nexus</h2>
    <p>Visit official site here: <a href="https://tietnexus.vercel.app/" target="_blank">https://tietnexus.vercel.app/</a></p>
  `);
});

export default routes;

