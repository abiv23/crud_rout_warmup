// Update with your config settings.

module.exports = module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/crudwarmup'
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL + '?ssl=true'
    }


};
