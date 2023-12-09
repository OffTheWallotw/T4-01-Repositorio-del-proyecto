Create database if not exists ABP;

use ABP;

create table preguntas_tipos(
    id_tipo             integer         not null       auto_increment,
    nombre              varchar(255)    not null,
    primary key         (id_tipo)
);

create table problemas(
    id_problema         integer         not null       auto_increment,
    nombre              varchar(255)    not null,
    hora_inicio         time            not null,
    hora_fin            time            not null,
    primary key         (id_problema)
);

create table categorias(
    id_categoria        integer         not null       auto_increment,
    fk_id_problema      integer         not null,
    nombre              varchar(255)    not null,
    primary key         (id_categoria),
    foreign key         (fk_id_problema)    references problemas(id_problema)
);

create table pregunta(
    id_pregunta         integer         not null       auto_increment,
    nombre              varchar(255)    not null,
    hora_inicio         time            not null,
    hora_fin            time            not null,
    primary key         (id_pregunta)
);