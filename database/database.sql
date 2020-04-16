DROP DATABASE ng_games_db;

CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE user(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR (180),
    userSurname VARCHAR(180),
    email VARCHAR(180),
    pass VARCHAR(180)
);

CREATE TABLE game(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    idUser INT(11),
    FOREIGN KEY (idUser) REFERENCES user(id)
        ON UPDATE CASCADE ON DELETE SET NULL

);

RENAME TABLE game to games;

/*
    Usuarios fixtures.
*/

INSERT INTO user(userName,userSurname,email,pass) VALUES ('Neil','Gutierrez Chacon','n.g.ch43@gmail.com','password');

/*
    Games fixtures;
*/

INSERT INTO games(title,description,image,idUser) 
        VALUES ('Pokemon Sol','Juego de nintendo 3DS'
        ,'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201605/23/00197571530803____1__640x640.jpg',1);



DESCRIBE games;