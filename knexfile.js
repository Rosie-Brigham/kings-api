// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'monarchs_db',
      user:     process.env.USER,
      password: process.env.PASSWORD
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  },

  production: process.env.DATABASE_URL || {
    debug: true,
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
