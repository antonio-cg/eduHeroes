#use eduHeroes;
	#Creacion tabla Items
/*create table Items(
	idItem int auto_increment not null,
	rareza varchar(20),
	sanacion int,
	nombre_I varchar(30),
	valor int,
	descripcion_I varchar(50),
	daño int,
	tipoI varchar(20),
	max int,
	primary key(idItem)
);
create table Mundo(
	idMundo int auto_increment not null,
	nombre_M varchar(20),
	lvlM int,
	capacidadMax int,
	primary key (idMundo)
);

create table Misiones(
	idMision int auto_increment not null,
	nombreMi varchar(30),
	inicio varchar(20),
	termina varchar(20),
	recompensa double,
	cantidad int,
	primary key (idMision)
);
create table Logros(
	idLogro int auto_increment not null,
	nombreL varchar(20),
	descripcion varchar(40),
	fecha varchar(10),
	tipoL int,
	primary key(idLogro)
);

create table Npc(
	idNpc int auto_increment not null,
	vida int,
	nombreN varchar(30),
	daño_N int,
	lvlN int,
	idMundo int not null,
	clase varchar(20),
	idItem int not null,
	dialogo varchar(50),
	primary key (idNpc),
	foreign key (idItem) references Items(idItem),
	foreign key (idMundo) references Mundo(idMundo)
);
create table Personaje(
	idPj int auto_increment not null,
	nombre varchar(15),
	passwordP varchar(10),
	primary key (idPj)
);

create table infoPersonaje(
	idPj int auto_increment not null,
	idMision int not null,
	posx int,
	posy int,
	lvlP int,
	idMundo int not null,
	puntos int,
	primary key (idPj),
	foreign key (idPj) references Personaje(idPj),
	foreign key (idMision) references Misiones(idMision),
	foreign key (idMundo) references Mundo(idMundo)
);
create table inventarioPj(
	idInventario int auto_increment not null,
	idPj int not null,
	cantidadItems int,
	idItem int not null,
	primary key (idInventario,idPj),
	foreign key (idPj) references Personaje(idPj),
	foreign key (idItem) references Items(idItem)
);

create table misionesCompletadas(
	idMision int auto_increment not null,
	idPj int not null,
	primary key(idMision),
	foreign key (idMision) references Misiones(idMision),
	foreign key (idPj) references Personaje(idPj)
);
create table infoLogro(
	idLogro int auto_increment not null,
	idPj int not null,
	primary key (idLogro),
	foreign key (idPj) references Personaje(idPj)
);
create table datosPersona(
	idPersona int auto_increment not null,
	idPj int not null,
	nombre_p varchar(30),
	direccion varchar(30),
	ciudad varchar(20),
	sexo varchar(10),
	edad int,
	email varchar(20),
	tipoPer varchar(10),
	primary key (idPersona),
	foreign key (idPj) references Personaje(idPj)
);Hasta aqui estan creadas*/
