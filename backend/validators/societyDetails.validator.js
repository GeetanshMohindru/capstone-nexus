import Joi from "joi";

export const createSocietySchema = Joi.object({
  name: Joi.string().trim().required(),
  categories: Joi.array().items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/)).optional(),
  categoryNames: Joi.array().items(Joi.string().trim()).min(1).required(),
  logo: Joi.string().trim().required(),
  about: Joi.string().trim().required(),

  stats: Joi.object({
    activeMembers: Joi.number().integer().min(0).optional(),
    establishedYear: Joi.number().integer().min(1900).max(new Date().getFullYear()).optional(),
    location: Joi.string().optional(),
  }).optional(),

  contact: Joi.object({
    email: Joi.string().email().allow(null, '').optional(),
    phone: Joi.string().allow(null, '').optional(),
    website: Joi.string().uri().allow(null, '').optional(),
  }).optional(),

  executiveTeam: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().trim().required(),
        role: Joi.string().trim().required(),
        email: Joi.string().email().allow(null, '').optional(),
      })
    )
    .min(1)
    .required(),

  ourActivities: Joi.array().items(Joi.string().trim()).optional().allow(null),
  recentAchievements: Joi.array().items(Joi.string().trim()).optional().allow(null),

  upcomingEvents: Joi.array()
    .items(
      Joi.object({
        title: Joi.string().trim().required(),
        date: Joi.string().trim().required(),
        location: Joi.string().trim().allow(null, '').optional(),
      })
    )
    .optional()
    .allow(null),

  socials: Joi.object({
    instagram: Joi.string().uri().allow(null, '').optional(),
    linkedin: Joi.string().uri().allow(null, '').optional(),
    twitter: Joi.string().uri().allow(null, '').optional(),
  }).optional(),

  lastUpdated: Joi.date().optional(),
});
