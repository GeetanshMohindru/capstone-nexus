import express from 'express';
const exploreRouter = express.Router();

import * as controller from '../controllers/society.controller.js';
import validateRequest from '../middleware/validateRequest.js';
import { createSocietySchema } from '../validators/societyDetails.validator.js';


// List
exploreRouter.get('/', controller.getAllSocieties);

// Read
exploreRouter.get('/society/:id', controller.getSocietyById);

// Note: attach authentication middleware where needed, e.g.
// import auth from '../middlewares/auth.js';
// router.post('/', auth, validateRequest(createSocietySchema, 'body'), controller.create);

export default exploreRouter;
