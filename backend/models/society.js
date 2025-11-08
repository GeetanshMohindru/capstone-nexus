// models/Society.js
import mongoose from "mongoose";

const executiveMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String },
});

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true }, // store as formatted string (e.g. "March 13, 2024")
  location: { type: String },
});

const societySchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g. "Creative Computing Society (CCS)"
  type: { type: String, enum: ["Technical", "Cultural", "Social", "Sports"], required: true },

  about: { type: String, required: true },

  stats: {
    activeMembers: { type: Number, default: 0 },
    establishedYear: { type: Number },
    location: { type: String },
  },

  contact: {
    email: { type: String },
    phone: { type: String },
    website: { type: String },
  },

  executiveTeam: [executiveMemberSchema],

  ourActivities: [{ type: String }], // can be null/empty
  recentAchievements: [{ type: String }], // can be null/empty

  upcomingEvents: [eventSchema], // can be null/empty

  socials: {
    instagram: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
  },

  lastUpdated: { type: Date, default: Date.now },
});

export default mongoose.model("Society", societySchema);
