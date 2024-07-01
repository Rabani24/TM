// src/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  workHistory: [{ jobTitle: String, company: String, startDate: Date, endDate: Date }],
  currentJob: { type: String, required: true },
  currentRole: { type: String, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  picture: { type: String },
  bankAccount: { type: String },
  barcode: { type: String, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
