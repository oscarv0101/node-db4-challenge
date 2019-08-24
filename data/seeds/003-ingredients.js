
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "flour", quantity: 2.5 },
        { name: "water", quantity: 5.0 },
        { name: "oil", quantity: 6.5 }
      ]);
    });
  });
};
