const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.MONGODB_URI);

const app = express();

require('./routes/authRoutes')(app);

// when we require the authRoutes file, it returns a function.
// we then immedaitly call that function with the app object.

const PORT = process.env.PORT || 5000;
// when heroku runs, it injects environment variables.
// Look at the underliying enviroment, and see if we've stated a port to use

app.listen(PORT); // express telling node which port to listen to.

