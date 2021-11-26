import Db from '../loaders/db'

class Model {

    private readonly _attr:object;

    protected db;

    constructor(modelName:string, tableName:string, attributes:object) {

        try {
            Db.authenticate().then();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }

        this._attr = attributes;

        this.db =  Db.define(modelName, attributes, {
            tableName: tableName
        });

    }

    connect(){
        return Db;
    }

    define(){
        return this.db
    }

    allFields(){
        const array = [];
        for (let index in this._attr){
            if(this._attr.hasOwnProperty(index)){
                array.push(index)
            }
        }
        return array;
    }
}

module.exports = {Model}
