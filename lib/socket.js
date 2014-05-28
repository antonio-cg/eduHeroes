    var BD = require('./mysql.js');


exports.start = function(port){
    var datos;
    var socketIO = require('socket.io');
    var io = socketIO.listen(port);
    io.sockets.on('connection',function(st){
        console.log("Conteado");
        BD.runQuery('SELECT * FROM Cliente;',function(data){datos=data;});
	st.emit('news',{hello : datos });
        
    });

    io.sockets.on('getAllNpc',function(st){
        console.log("getAllNpx");
        st.emit('allNpc',{hello : 'world'});
        
    });

    

}
