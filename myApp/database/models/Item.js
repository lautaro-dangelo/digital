
module.exports = function(sequelize, dataTypes) {
   
    let alias = 'Item';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        precio:{
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
        producto_id:{
            type: dataTypes.INTEGER
        },
        producto_imagen:{
            type: dataTypes.STRING
        },
        producto_nombre:{
            type: dataTypes.STRING
        },

    }
   
    let config = {
        tableName: 'items',
        timestamps: false
    }

    let Item = sequelize.define(alias, cols, config);

    Item.associate = function( models ) {
        Item.belongsTo(models.Usuario, {
            foreignKey: 'usuario_id'
        })
    };

    Item.associate = function( models ) {
        Item.belongsTo(models.Order, {
            foreignKey: 'order_id'
        })
    };
    Item.associate = function( models ) {
        Item.belongsTo(models.Producto, {
            as: 'productos',
            foreignKey: 'producto_id'
        })
    };

    return Item;
    
};