
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/admin',routes.admin);
//Rutas para  Mision
app.get('/admin/mision',routes.mision);
app.get('/admin/mision/nuevo',routes.misionNuevo);
app.get('/admin/mision/modificar',routes.misionModificar);
app.get('/admin/mision/borrar',routes.misionBorrar);
app.get('/admin/mision/buscar',routes.misionBuscar);
//Rutas para  NPC
app.get('/admin/npc',routes.npc);
app.get('/admin/npc/nuevo',routes.npcNuevo);
app.get('/admin/npc/modificar',routes.npcModificar);
app.get('/admin/npc/borrar',routes.npcBorrar);
app.get('/admin/npc/buscar',routes.npcBuscar);
//rutas para  Mundo
app.get('/admin/mundo',routes.mundo);
app.get('/admin/mundo/nuevo',routes.mundoNuevo);
app.get('/admin/mundo/modificar',routes.mundoModificar);
app.get('/admin/mundo/borrar',routes.mundoBorrar);
app.get('/admin/mundo/buscar',routes.mundoBuscar);   
//rutas para items
app.get('/admin/item',routes.item);
app.get('/admin/item/nuevo',routes.itemNuevo);
app.get('/admin/item/modificar',routes.itemModificar);
app.get('/admin/item/borrar',routes.itemBorrar);
app.get('/admin/item/buscar',routes.itemBuscar);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
