const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  tx: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
