const { func } = require("prop-types");

module.exports = function(sequelize, dataTypes) {
   
    let alias = 'Items';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        precioUnitario:{
            type: dataTypes.INTEGER
        },
        cantidad:{
            type: dataTypes.INTEGER
        },
        subtotal:{
            type: dataTypes.INTEGER
        },
        state:{
            type: dataTypes.INTEGER
        },
        order_id:{
            type: dataTypes.INTEGER
        },
        usuario_id:{
            type: dataTypes.INTEGER
        },

    }
   
    let config = {
        tableName: 'items',
        timestamps: false
    }

    let Items = sequelize.define(alias, cols, config);

    Items.associate = function( models ) {
        Items.belongsTo(models.Usuario, {
            foreignKey: 'usuario_id'
        })
    };

    return Items;
    
};