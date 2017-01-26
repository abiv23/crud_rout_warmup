var knex = require('../db/knex');

module.exports = {
    create: function(owner) {
        return knex('owner').insert(owner)
    },
    getUserByEmail: function(email) {
        return knex('owner').where('email', email).first();
    }
}
