
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.admin = function(req, res){
    res.render('admin',{title : 'EduHeroes Admin' });
}

exports.mision = function(req,res){
    res.render('mision',{title : 'EduHeroes Admin: Misiones'});
}

exports.nuevoNPC = function(req,res){
    res.render('NPC/nuevoNpc',{});
}
