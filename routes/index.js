const path = require("path");
const router = require("express").Router();

router.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});


module.exports = router;