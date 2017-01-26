var express = require('express');
var router = express.Router();
var User = require('../db/knex')
var queries = require('../lib/query')
var bcrypt = require('bcrypt')

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/signup', (req, res, next) => {
    if (validate(req.body)) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        queries.create(req.body).then((data) => {
            res.json(req.body)
        })
    } else {
        next(new Error('Invalid user'));
    }
})

function validate(user) {
    const isValid = typeof user.email === 'string' &&
        user.email.trim() != '' &&
        typeof user.password === 'string' &&
        user.password.trim() != ''
    return isValid
}

module.exports = router;
