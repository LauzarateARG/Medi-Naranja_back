const { DataTypes } = require('sequelize')

module.exports = function(sequelize){
    return sequelize.define('order',{
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
            },
        products:{
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull:true
        },
        state:{
            type: DataTypes.STRING,
            defaultValue: "in progress"
        }
    });
}