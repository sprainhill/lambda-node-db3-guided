const db = require('../data/db-config')

module.exports = {
    listPosts,
    listPostById
}

function listPosts() {
    // select * from users
    // return db.select('*').from('users');
    // returns a promise
    return db('posts as p')
    .join('users as u','p.user_id', 'u.id').select('p.id as postId', 'p.contents', 'u.username as postedBy')
}

function listPostById(id) {
    // select * from users where id = id ??
    return db('posts')
    .where({ id })
    .first();
}

