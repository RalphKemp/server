const express = require('express'); // common js module
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there'});
}); // this is a route handler. the current method is get, and can take other api requests like post, delete etc.

app.listen(5000);
