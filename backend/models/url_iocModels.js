import {Sequelize} from "sequelize";
import db from "../config/database.js";
import ioc_table from "./ioc_tableModels.js";
 
const {DataTypes} = Sequelize;
 
const url_ioc = db.define('url_ioc',{
    ioc_name: DataTypes.STRING,
    url: DataTypes.STRING,
},{
    freezeTableName:true
});

url_ioc.belongsTo(ioc_table, { foreignKey: 'ioc_id' });

export default url_ioc;
(async()=>{
    await db.sync();
})();