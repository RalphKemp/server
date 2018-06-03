const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);

// so here we're telling mongoose we want to create a new model (or collection) for users

// mongoose wants specific properties for each model (collection/Class)
// if you want to specify some more configuration to a new model attribute,
// you'll assign an object to it and pass some options into the object
