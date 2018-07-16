const path = require("path");
const router = require("express").Router();

router.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/build', 'index.html'));
  });

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    router.use(express.static(path.join(__dirname, './client/build')));
    // Handle React routing, return all requests to React app
    router.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, './client/build', 'index.html'));
    });
  }


module.exports = router;