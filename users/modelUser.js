const db = require('../data/db-config');

module.exports = {
    getAll,
    findById,
    update,
}

function getAll(){
    return db('users')
};

function findById(id) {
    return db("users").where({ id }).first();
}

function update(id, changes){
   return db("users").where({ id }).update(changes)
   .then(()=>{
       return findById(id);
   })
}