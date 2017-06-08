
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('spendings').del()
    .then(function () {
      // Inserts seed entries
      return knex('spendings').insert([
        {date: "1/1/15",item:"P.G.E.", amount:62.93, category: "Utility"},
        {date: "2/1/15",item:"Maginanos", amount:100.23, category: "Restaurant"},
        {date: "3/1/15",item:"Fry's food", amount:30.67, category: "Grocery"},{date: "4/1/15",item:"Maginanos food", amount:30.67, category: "Restaurant"},{date: "7/1/15",item:"Safeway", amount:30.67, category: "Grocery"},{date: "9/1/15",item:"Albertson", amount:30.67, category: "Grocery"},
      ]);
    });
};