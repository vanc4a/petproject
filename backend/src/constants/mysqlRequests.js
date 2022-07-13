module.exports = mysqlRequests = {
    getByToken : 'SELECT * FROM users WHERE token = ?',
    userPosts: 'SELECT * FROM posts WHERE user_id = ?',
    allPosts: 'SELECT * FROM posts',
    login : 'SELECT * FROM users WHERE login = ?',
    registration: 'INSERT INTO users(login,password,user_role) VALUES(?,?,?)',
    setToken: 'UPDATE users set token = ? WHERE login = ?',
}