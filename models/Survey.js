const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema], // array of strings
  yes: { type: Number, default: 0},
  no: { type: Number, default: 0}
});

mongoose.model('surveys', surveySchema)



// our reciepients prop is going to need a sub document collection
// mongo db document file size limit is 4mb
