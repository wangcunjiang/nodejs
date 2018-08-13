var mysql      = require('C:/Users/admin/AppData/Roaming/npm/node_modules/mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mine_manager'
});
 
connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

connection.query('SELECT * from ma_dic', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });

connection.end();