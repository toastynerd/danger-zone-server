const Router = require(__dirname + '/../lib/router');
const http = require('http');
var headMessage = require(__dirname + '/../lib/headMessage');
var router = new Router();

// This is for the plain text non-404 test
router.get('/textplaintest', (req, res) => {
  headMessage(res, 200, 'text/plain', 'this here\'s some plain text ');
  return res.end();
});

// This is for the application json non-404 test
router.get('/applicationjsontest', (req, res) => {
  headMessage(res, 200, 'application/json', 'y\'all got some bodacious parsed json');
  return res.end();
});

// Now we instantiate and export the server
var server = http.createServer(router.route());
module.exports = exports = server.listen(8888);
