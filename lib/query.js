var knex = require('../db/knex');

module.exports = {
    create: function(user) {
        return knex.raw(`INSERT INTO owner values(default,
      '${user.email}',
      '${user.password}')`);
    }
}
