const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contactSchema = new Schema({

  FirstName: String,
  MiddleName: String,
  LastName: String,
  EmailAddress: String,
  HomePhone: String,
  HomePhone2: String,
  MobilePhone:  String,
  BusinessPhone: String,
  OtherPhone: String


});
const model = mongoose.model('contact', contactSchema);


const list= async(condition,limit) => {
limit = limit || 1000;
  return await model.find(condition)
  .limit(limit)
    .exec()
    .then(items => {
      return items;
    });

}
module.exports = {
  list,
  model

}
