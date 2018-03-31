const express = require('express'); // common js module
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there'});
}); // this is a route handler. the current method is get, and can take other api requests like post, delete etc.

const PORT = process.env.PORT || 5000;
// when heroku runs, it injects environment variables.
// Look at the underliying enviroment, and see if we've stated a port to use

app.listen(PORT); // express telling node which port to listen to.
