const { DataTypes } = require('sequelize')

module.exports = function(sequelize){
    return sequelize.define('product',{
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
            },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        price:DataTypes.INTEGER,
        amount: DataTypes.INTEGER,
        size: DataTypes.STRING,
    });
}