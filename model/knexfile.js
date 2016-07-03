// Update with your config settings.

module.exports = {
  production: {
    client: '',
  connection: {
    host     : '',
    user     : '',
    password : '',
    database : ''
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
