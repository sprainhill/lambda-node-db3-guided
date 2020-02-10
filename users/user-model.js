module.exports = {
    listUsers
}

function listUsers() {
    // select * from users

    // return db.select('*').from('users');
    
    // returns a promise
    return db('users');
}