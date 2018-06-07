const requireLogin = require('../middlewares/requireLogin');
const checkBalance = require('../middlewares/checkBalance');

module.exports = app => {
  app.post('/api/surveys', requireLogin, checkBalance, (req, res) => {
    if (req.user.credits >= 1) {
      res.send
    }
  });
};





// requireLogin here is a reference to a function, we're not calling it directly.
// We're saying hey, if there is a req and res, here's a request to the function that you'll run
