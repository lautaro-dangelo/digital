
module.exports = function(sequelize, dataTypes) {
   
    let alias = 'Order';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orderNumber: {
            type: dataTypes.INTEGER
        },
        total:{
            type: dataTypes.INTEGER
        },
        usuario_id:{
            type: dataTypes.INTEGER
        }
      

    }
   
    let config = {
        tableName: 'orders',
        timestamps: false
    }

    let Order = sequelize.define(alias, cols, config);

    Order.associate = function( models ) {
        Item.belongsTo(models.Usuario, {
            foreignKey: 'usuario_id'
        })
    };

    Order.associate = function( models ) {
        Order.belongsTo(models.Order, {
            foreignKey: 'order_id'
        })
    };

    return Order;
    
};