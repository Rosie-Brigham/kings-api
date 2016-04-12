
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('monarchs', function(table) {
   table.increments()
   table.string('name')
   table.string('epitaph')
   table.string('image_url')
   table.text('house')
   table.string('rex_factor_url')
   table.date('born')
   table.date('died')
   table.dateTime('ruled_from')
   table.dateTime('ruled_to')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('monarchs')
};
