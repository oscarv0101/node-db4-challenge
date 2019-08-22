exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
  return knex("recipe_instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_instructions").insert([
        { recipe_id: 1, instruction_id: 1 },
        { recipe_id: 2, instruction_id: 2 },
        { recipe_id: 3, instruction_id: 3 }
      ]);
    });
  });
};