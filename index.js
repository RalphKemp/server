const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session'); // gives us access to cookies
const passport = require('passport'); // tell passport to make use of cookies
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.MONGODB_URI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // how long the cookie can live in the brwoser before dying (ms)
    keys: [keys.cookieKey] // used to encrypt our cookie
  })
);
app.use(passport.initialize());
app.use(passport.session());

// app.use. = they are wiring up to middleware. They are small functions that can modify
// incoming requests to our app become they are sent off to route handlers.
// we can assign data to the cookie, cookie-session as a middleware then takes all the data
// out of that cookie, and assigns it to the req.session property.
// cookie is the session (with user id)
// express-session the cookie references a session (session store on different remote server, no size limit)

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets like our main.js file, or main.cookie-session
  app.use(express.static('client/build'));
  // Express will serve up the index.html file if it doesnt recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// when we require the authRoutes file, it returns a function.
// we then immedaitly call that function with the app object.

const PORT = process.env.PORT || 5000;
// when heroku runs, it injects environment variables.
// Look at the underliying enviroment, and see if we've stated a port to use

app.listen(PORT); // express telling node which port to listen to.
