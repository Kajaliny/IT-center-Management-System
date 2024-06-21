const mongoose = require('mongoose');

const ComputerSchema = new mongoose.Schema({
  status: { type: String, default: 'available' },
  location: { type: String, required: true },
  lastMaintenanceDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Computer', ComputerSchema);
