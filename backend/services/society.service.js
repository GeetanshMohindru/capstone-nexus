import 'dotenv/config';
import mongoose from 'mongoose';
import Society from '../models/society.model.js';
import logger from '../utils/logger.js';

class SocietyService {
  async createSociety(payload) {
    try {
      const doc = await Society.create(payload);
      if (!doc) throw { status: 500, message: 'Failed to create society' };
      return doc.toObject ? doc.toObject() : doc;
    } catch (err) {
        console.log(`error in creating society createSociety backend/services/society.service.js`);
        logger.error(`SocietyService.createSociety | ${err.message || JSON.stringify(err)}`);
      throw err;
    }
  }

  async getAllSocieties(filter = {}, options = {}) {
    try {
      const limit = options.limit ? parseInt(options.limit, 10) : 100;
      const docs = await Society.find(filter).lean().limit(limit);
      return docs;
    } catch (err) {
        console.log(`error in listing societies getAllSocieties backend/services/society.service.js`);
        logger.error(`SocietyService.getAllSocieties | ${err.message || JSON.stringify(err)}`);
      throw err;
    }
  }

  async getSocietyById(id) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id))
        throw { status: 400, message: 'Invalid id' };

      const doc = await Society.findById(id).lean();

      if (!doc) throw { status: 404, message: `Society with ID ${id} not found` };

      return doc;
    } catch (err) {
        console.log(`error in fetching society getSocietyById backend/services/society.service.js`);
        logger.error(`SocietyService.getSocietyById | ${err.message || JSON.stringify(err)}`);
      throw err;
    }
  }

  async getSocietiesByCategory(categoryName) {
    try {
      // accept either a string or an array of category names
      let categories = categoryName;
      if (!categories) return [];
      if (typeof categories === 'string') {
        categories = categories.split(',').map((s) => s.trim()).filter(Boolean);
      }

      if (!Array.isArray(categories) || categories.length === 0) return [];

      // find societies where any of the categoryNames is in the provided list (union)
      const docs = await Society.find({ categoryNames: { $in: categories } }).select('name').lean();
      return docs.map((d) => d.name);
    } catch (err) {
      console.log(`error in fetching societies by category getSocietiesByCategory backend/services/society.service.js`);
      logger.error(`SocietyService.getSocietiesByCategory | ${err.message || JSON.stringify(err)}`);
      throw err;
    }
  }

  async updateSociety(id, payload) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) throw { status: 400, message: 'Invalid id' };

      const updated = await Society.findByIdAndUpdate(id, payload, { new: true }).lean();

      if (!updated) throw { status: 404, message: `Society with ID ${id} not found` };

      return updated;
    } catch (err) {
        console.log(`error in updating society updateSociety backend/services/society.service.js`);
        logger.error(`SocietyService.updateSociety | ${err.message || JSON.stringify(err)}`);
      throw err;
    }
  }

  async deleteSociety(id) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) throw { status: 400, message: 'Invalid id' };

      const removed = await Society.findByIdAndDelete(id).lean();

      if (!removed) throw { status: 404, message: `Society with ID ${id} not found` };

      return removed;
    } catch (err) {
        console.log(`error in deleting society deleteSociety backend/services/society.service.js`);
        logger.error(`SocietyService.deleteSociety | ${err.message || JSON.stringify(err)}`);
      throw err;
    }
  }
}

export default SocietyService;
