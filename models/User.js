const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);

// so here we're telling mongoose we want to create a new model (or collection) for users

// mongoose wants specific properties for each model (collection/Class)
