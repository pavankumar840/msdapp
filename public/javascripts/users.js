const mongoose = require('mongoose');

const user = new mongoose.Schema({
  name: {
    type: String
  },
  dob: {
    type: String
  },
  interests: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  }
  // updated: {
  //   type: new Date,
  //   default : new Date()
  // }
});

module.exports = User = mongoose.model('user', user);
