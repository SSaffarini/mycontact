const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user1:abcd1234@cluster0-b5voa.mongodb.net/application', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
