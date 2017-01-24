var express = require('express');
var router = express.Router();
var user = require('../db/knex')

/* mounted at /users/ */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', (req, res, next) => {
    console.log(res);
    res.send('hit the post router!')
})

module.exports = router;
