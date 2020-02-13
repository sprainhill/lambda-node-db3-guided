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
    console.log("in postUser")
    return db('users').insert(userData).then(([id]) => {
        return listUserById(id)
    });
}

function updateUser(userData) {

    return db('users').update(userData).where(id, id).then(([id]) => {
        return listUserById(id)
    });
}

function deleteUser(userData) {

    return db('users').delete().where(id, id).then(([id]) => {
        return findById(id)
    });
}


