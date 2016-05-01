var Knex = require('knex');
var knexConfig = require('../knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

function all() {
 return knex.select().table('monarchs')
}

function year(year) {
  var dateYear = new Date(year)
  var years = knex('monarchs').where('ruled_from', '<=', dateYear).andWhere('ruled_to', '>=', dateYear);

  return years
}


module.exports = {
  all: all,
  year : year
}




