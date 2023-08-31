import {Sequelize} from "sequelize";
import db from "../config/database.js";
 
const {DataTypes} = Sequelize;
 
const ioc_table = db.define('ioc_table',{
    ioc_id : {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
    sha_256: DataTypes.STRING,
    url: DataTypes.STRING,
    ip: DataTypes.STRING,
    domain: DataTypes.STRING,
},{
    freezeTableName:true
});
 
export default ioc_table;
 
(async()=>{
    await db.sync();
})();