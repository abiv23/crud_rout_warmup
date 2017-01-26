var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var queries = require('../lib/query')
var bcrypt = require('bcrypt')
var methodOverride = require('method-override')

/* mounted at /users/ */
router.get('/', function(req, res, next) {
    knex('owner').select().then(owners => {
        res.render('users', {
            owners
        })
    })
});

router.get('/new', function(req, res, next) {
    res.render('new')
})

router.post('/new', function(req, res, next) {
    req.body.password = bcrypt.hasSync(req.body.password, 10)
    queries.create(req.body)
        .then(function(data) {
            knex('user').where('id', req.params.id).first(then(data => {
                res.render('/users')
            }))
        })
})

router.get('/:id', function(req, res, next) {
    knex('owner').where('id', req.params.id).first().then(data => {
        res.render('user', {
            data
        });
    })

});

router.post('/:id/update', function(req, res, next) {
    knex('owner').where('id', req.params.id).update({
        email: req.body.email,
        password: req.body.password
    }).then(data => {
        res.redirect('/users')
    })
})

router.delete('/:id/delete', function(req, res, next) {
    knex('owner').where('id', req.params.id).first().del().then((data) => {
        res.redirect('/users')
    })
})



module.exports = router;
