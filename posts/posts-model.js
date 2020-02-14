const db = require('../data/db-config')

module.exports = {
    listUsers,
    listUserById,
    postUser,
    updateUser
}

function listPosts() {
    // select * from users

    // return db.select('*').from('users');

    // returns a promise
    return db('posts');
}

function listPostById(id) {
    // select * from users where id = id ??
    return db('posts').where({ id }).first();
}

