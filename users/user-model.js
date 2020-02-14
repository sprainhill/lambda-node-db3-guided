const db = require('../data/db-config')

module.exports = {
    listUsers,
    listUserById,
    postUser,
    updateUser
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

function updateUser(changes) {
    db('users').where({ id }).update(changes)
    return db('users').where({id}).update(changes).then(([id]) => {
        return listUserById(id)
    });
}

function deleteUser(userData) {

    return db('users').delete().where(id, id).then(([id]) => {
        return findById(id)
    });
}


