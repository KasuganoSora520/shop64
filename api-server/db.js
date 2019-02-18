const mysql = require('mysql')
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'zhangkunjie',
    database: 'todo'
  });
  module.exports=conn