/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = function(knex) {
  // Deletes ALL existing entries, truncate will reset the ids
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'dschwan', email: 'derek@me.com', password: '123', bio: 'hello', name: 'Derek james'},
        {username: 'derrys', email: 'derry@gmail.com', password: '345', bio: 'i teach', name: 'Derry S'},
        {username: 'jimmy23', email: 'jim22@me.com', password: '4333', bio: '', name: 'Jim Philip'}
      ]);
    });
};
