 // dependencies
var mysql = require('mysql');

// run query to db
var dbConfig = {
   host:'localhost',
   user:'root',
   password:'12345',
   database:'Cuentas'
};

exports.runQuery = function(Query,callback){
   var connection = mysql.createConnection(dbConfig);
   connection.connect(function(err) {
       if (err) throw console.log(err);
   });
   
   connection.query(Query,function(err, res){
       if (err) throw console.log(err);
         if (callback){
            callback(res);
         }
      }
   );
        connection.end();
}

// module
/*
DB.prototype.getSingleData = function(data,callback){
   var Query = queries.SQLGETSINGLEDATA;
   var Data  = [data];
   runQuery(Query,Data,function(res){
      res = res.pop();
      callback(res);
   });
}

DB.prototype.saveSingleData = function(data){
   var Query = queries.SQLSAVESINGLEDATA;
   var Data  = data;
   runQuery(Query,Data);
}
*/
