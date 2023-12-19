const {DataTypes, Model, Sequelize} = require('sequelize')

class Todo extends Model {
    static initiate(sequelize){
        Todo.init(
            {
                no : {
                    type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true,
                },
                name : {
                    type : DataTypes.TEXT, allowNull : false,
                }, 
                status : {
                    type : DataTypes.INTEGER, defaultValue : `0`,
                },
                reg_date : {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                },
                upd_date : {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                }
            },
            {
                sequelize, 
                modelName : 'Todo',
                tableName : 'todo',
                timestamps : false
            }
        );
    }

    static associate(db) {}

}

module.exports = Todo;