
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.admin = function(req, res){
    res.render('admin',{title : 'EduHeroes Admin' });
}
//rutas Mision
exports.mision = function(req,res){
    res.render('mision',{title : 'EduHeroes Admin: Misiones'});
}

exports.misionNuevo = function(req,res){
    res.render('mision/nuevo',{});
}

exports.misionModificar = function(req,res){
    res.render('mision/modificar',{});
}

exports.misionBorrar = function(req,res){
    res.render('mision/borrar',{});
}

exports.misionBuscar = function(req,res){
    res.render('mision/buscar',{});
}

//Rutas NPC
exports.npc = function(req,res){
    res.render('npc',{title : '2'});
}

exports.npcNuevo = function(req,res){
    res.render('npc/nuevo',{});
}

exports.npcModificar = function(req,res){
    res.render('npc/modificar',{});
}

exports.npcBorrar = function(req,res){
    res.render('npc/borrar',{});
}

exports.npcBuscar = function(req,res){
    res.render('npc/buscar',{});
}

//rutas Mundo

exports.mundo = function(req,res){
    res.render('mundo',{title : 'EduHeroes Admin: Misiones'});
}

exports.mundoNuevo = function(req,res){
    res.render('mundo/nuevo',{});
}

exports.mundoModificar = function(req,res){
    res.render('mundo/modificar',{});
}

exports.mundoBorrar = function(req,res){
    res.render('mundo/borrar',{});
}

exports.mundoBuscar = function(req,res){
    res.render('mundo/buscar',{});
}

//rutas Items 

exports.item = function(req,res){
    res.render('item',{});
}

exports.itemNuevo = function(req,res){
    res.render('item/nuevo',{});
}

exports.itemModificar = function(req,res){
    res.render('item/modificar',{});
}

exports.itemBorrar = function(req,res){
    res.render('item/borrar',{});
}

exports.itemBuscar = function(req,res){
    res.render('item/buscar',{});
}

