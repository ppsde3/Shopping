const { Sequelize, DataTypes } = require('sequelize');

module.exports=(sequelize,DataTypes)=>{
    sequelize.define('Product',{
        name:{
            type: DataTypes.STRING,
            required:true,
            unique: true
        },
        title:{
            type: DataTypes.STRING,
            required:true
        },
        price:{
            type: DataTypes.INTEGER,
            required:true
        },
        description:{
            type: DataTypes.STRING            
        }
    })
}