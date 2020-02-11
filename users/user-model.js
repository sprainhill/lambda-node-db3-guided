const db = require('../data/db-config')

module.exports = {
    listUsers,
    listUserById,
    postUser
}

function listUsers() {
    // select * from users

    // return db.select('*').from('users');

    // returns a promise
    return db('users');
}

function listUserById(id) {
    // select * from users where id = id ??
    return db('users').where({ id }).first();
}

function postUser(userData) {
    return db('users').insert(userData).then(ids => {
        return findById(ids[0])
    });
}