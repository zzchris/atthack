var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'box1231.bluehost.com',
  user     : 'rojectsa_chris',
  password : 'babies12345',
  database : 'rojectsa_atthack'
});

connection.connect();

connection.query('DELETE asdf', function(err, rows, fields) {
  if (err) throw err;

  console.log("Deleted successfully.");
});

connection.end();