const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  contactEmail: { type: String, required: true },
  address: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Company', companySchema);
