module.exports = mysqlQueries = {
  getByToken: 'SELECT * FROM users WHERE token = ?',
  getById: 'SELECT * FROM users WHERE id = ?',
  userPosts: 'SELECT * FROM posts WHERE user_id = ?',
  allPosts: 'SELECT * FROM posts',
  login: 'SELECT * FROM users WHERE login = ?',
  registration: 'INSERT INTO users(login,password,user_role) VALUES(?,?,?)',
  setToken: 'UPDATE users set token = ? WHERE login = ?',
};
