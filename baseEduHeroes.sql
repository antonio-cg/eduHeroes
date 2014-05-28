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
);*/

	#Faltan por crear
/*
create table Npc(
	idNpc int auto_increment not null,
	vida int,
	nombreN varchar(30),
	daño_N int,
	lvlN int,
	idMundo int auto_increment not null,
	clase varchar(20),
	idItem int auto_increment not null,
	dialogo varchar(50),
	primary key (idNpc),
	foreign key (idItem) references Items(idItem),
	foreign key (idMundo) references Mundo(idMundo)
);
/*
create table infoPersonaje(
	idPj int auto_increment not null,
	idMision int auto_increment not null,
	posx int,
	posy int,
	lvlP int,
	idMundo int auto_increment not null,
	puntos int,
	primary key (idPj),
	foreign key (idPj) references Personaje(idPj),
	foreign key (idMision) references Misiones(idMision),
	foreign key (idMundo) references Mundo(idMundo)
);/*
create table inventarioPj(
	idInventario int auto_increment not null,
	idPj int auto_increment not null,
	cantidadItems int,
	idItem int auto_increment not null,
	primary key (idInventario,idPj),
	foreign key (idPj) references Personaje(idPj),
	foreign key (idItem) references Items(idItem)
);

create table misionesCompletadas(
	idMision int auto_increment not null,
	idPj int auto_increment not null,
	primary key(idMision),
	foreign key (idMision) references Misiones(idMision),
	foreign key (idPj) references Personaje(idPj)
);
create table Personaje(
	idPj int auto_increment not null,
	idGrupo int auto_increment not null,
	idTutor int auto_increment not null,
	tipoPer varchar(20),
	nombre varchar(15),
	passwordP varchar(10),
	primary key (idPj),
	foreign key (idGrupo) references Grupos(idGrupo),
	foreign key (idTutor) references Tutor(idTutor)
);

create table infoLogro(
	idLogro int auto_increment not null,
	idPj int auto_increment not null,
	primary key (idLogro),
	foreign key (idPj) references personaje(idPj)
);
create table datosPersona(
	idPersona int auto_increment not null,
	idPj int auto_increment not null,
	nombre_p varchar(30),
	direccion varchar(30),
	ciudad varchar(20),
	sexo varchar(10),
	edad int,
	email varchar(20),
	primary key (idPersona),
	foreign key (idPj) references personaje(idPj)
);/*
create table Jugador(
	idPj int auto_increment not null,
	primary key (idPersona)
);
create table Tutor(
	idTutor int auto_increment not null,
	primary key (idPersona)
);
create table Maestra(
	idMaestra int auto_increment not null,
	idGrupo int auto_increment not null,
	primary key (idPersona),
	foreign key (idGrupo) references Grupos(idGrupo)
);
create table Grupos(
	idGrupo int auto_increment not null,
	NombreG varchar(20),
	idMaestra int auto_increment not null,
	primary key (idGrupo),
	foreign key (idMaestra) references maestra(idMastra)
);*/
