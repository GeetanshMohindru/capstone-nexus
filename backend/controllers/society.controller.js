import logger from '../utils/logger.js';
import SocietyService from '../services/society.service.js';

const service = new SocietyService();

// NOTE: validation must happen at the router level using validateRequest(schema, 'body')

export const createSociety = async (req, res, next) => {
  try {
    const created = await service.createSociety(req.body);
    logger.info(`${req.method} ${req.originalUrl} | Create society | Success`);
    return res.status(201).json({ success: true, data: created });
  } catch (err) {
    console.log(`error in creating society createSociety backend/controllers/society.controller.js`);
    // Service already logs errors. Forward to centralized error handler.
    return next(err);
  }
};
export const getAllSocieties = async (req, res, next) => {
  try {
    const items = await service.getAllSocieties({}, { limit: req.query.limit });
    logger.info(`${req.method} ${req.originalUrl} | List societies | Success | count=${Array.isArray(items) ? items.length : 0}`);
    return res.status(200).json({ success: true, data: items });
  } catch (err) {
    console.log(`error in listing societies getAllSocieties backend/controllers/society.controller.js`);
    return next(err);
  }
};

export const getSocietyById = async (req, res, next) => {
  try {
    const item = await service.getSocietyById(req.params.id);
    logger.info(`${req.method} ${req.originalUrl} | Fetch society | Success`);
    return res.status(200).json({ success: true, data: item });
  } catch (err) {
    console.log(`error in fetching society getSocietyById backend/controllers/society.controller.js`);
    return next(err);
  }
};

export const getSocietiesByCategory = async (req, res, next) => {
  try {
    const categoryQuery = req.query.category;
    if (!categoryQuery) return next({ status: 400, message: 'category query parameter is required' });

    // support comma-separated values: ?category=Technical,Music and Drama
    const categories = categoryQuery.split(',').map((s) => s.trim()).filter(Boolean);
    if (categories.length === 0) return next({ status: 400, message: 'category query parameter is empty' });

    const names = await service.getSocietiesByCategory(categories);
    logger.info(`${req.method} ${req.originalUrl} | Fetch societies by category | Success | categories=${categories.join(',')} | count=${names.length}`);
    return res.status(200).json({ success: true, data: names });
  } catch (err) {
    console.log(`error in fetching societies by category getSocietiesByCategory backend/controllers/society.controller.js`);
    return next(err);
  }
};

export const updateSociety = async (req, res, next) => {
  try {
    const updated = await service.updateSociety(req.params.id, req.body);
    logger.info(`${req.method} ${req.originalUrl} | Update society | Success`);
    return res.status(200).json({ success: true, data: updated });
  } catch (err) {
    console.log(`error in updating society updateSociety backend/controllers/society.controller.js`);
    return next(err);
  }
};

export const deleteSociety = async (req, res, next) => {
  try {
    const deleted = await service.deleteSociety(req.params.id);
    logger.info(`${req.method} ${req.originalUrl} | Delete society | Success`);
    return res.status(200).json({ success: true, data: deleted });
  } catch (err) {
    console.log(`error in deleting society deleteSociety backend/controllers/society.controller.js`);
    return next(err);
  }
};
