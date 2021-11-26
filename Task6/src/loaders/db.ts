import config from "../config";
const {Sequelize} = require("sequelize");

function sequelize(){
    try{
        return new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
            host: config.DB_HOST,
            dialect: 'postgres',
        })
    } catch (e){
        throw  new Error();
    }
}
export default sequelize();

