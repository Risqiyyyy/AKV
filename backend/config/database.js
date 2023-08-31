import {Sequelize} from "sequelize";

const db = new Sequelize('coba','postgres','',{
    host: 'localhost',
    dialect: 'postgres'
});

export default db;