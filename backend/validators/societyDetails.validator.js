import Joi from "joi";

export const createSocietySchema = Joi.object({
  name: Joi.string().trim().required(),
  type: Joi.string().valid("Technical", "Cultural", "Social", "Sports").required(),

  about: Joi.string().trim().required(),

  stats: Joi.object({
    activeMembers: Joi.number().integer().min(0).optional(),
    establishedYear: Joi.number().integer().min(1900).max(new Date().getFullYear()).optional(),
    location: Joi.string().optional(),
  }).optional(),

  contact: Joi.object({
    email: Joi.string().email().optional(),
    phone: Joi.string().pattern(/^[0-9+\-\s()]{6,20}$/).optional(),
    website: Joi.string().uri().optional(),
  }).optional(),

  executiveTeam: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().trim().required(),
        role: Joi.string().trim().required(),
        email: Joi.string().email().optional(),
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
        location: Joi.string().trim().optional(),
      })
    )
    .optional()
    .allow(null),

  socials: Joi.object({
    instagram: Joi.string().uri().optional(),
    linkedin: Joi.string().uri().optional(),
    twitter: Joi.string().uri().optional(),
  }).optional(),

  lastUpdated: Joi.date().optional(),
});
