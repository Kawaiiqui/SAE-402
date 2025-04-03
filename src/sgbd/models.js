const Sequelize = require("sequelize");
const myDB = require("./config");


const Movies = myDB.define(
    "movie", 
    {
        id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        year: {
              type: Sequelize.INTEGER,
              allowNull: false,
            },
    },
    {timestamps: false}
);
const Actors = myDB.define(
    "actors", 
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
                type: Sequelize.STRING,
                allowNull: false,
        }
    },
    {timestamps: false}
);

const Genre = myDB.define(
    "genre", 
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        genre: {
                type: Sequelize.STRING,
                allowNull: false,
        }
    },
    {timestamps: false}
);

const Moviesactors = myDB.define(
    "moviesactors", 
    {
        id_movie: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        id_actors: {
                type: Sequelize.INTEGER,
                allowNull: false,
        }
    },
    {timestamps: false}
);

const Moviesgenre = myDB.define(
    "moviesgenre", 
    {
        id_movie: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        id_genre: {
                type: Sequelize.INTEGER,
                allowNull: false,
        }
    },
    {timestamps: false}
);
module.exports = {Movies, Actors, Genre, Moviesactors, Moviesgenre};