const {Sequelize} = require("sequelize");

class ModelDb {

    protected db:any;

    constructor(modelName:string, tableName:string, attributes:object) {

        const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
            host: process.env.DB_HOST,
            dialect: 'postgres',
        });

        this.db = sequelize.define(modelName, attributes, {
            tableName: tableName
        });
    }

    connect(){
        return this.db;
    }
}

module.exports = {ModelDb}
