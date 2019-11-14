const mongoose = require('mongoose');
const config = require('../config');
mongoose.connect(config.connect, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
