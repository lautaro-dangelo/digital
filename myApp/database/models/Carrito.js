module.exports = function(sequelize, dataTypes) {
   
    let alias = 'Carrito';

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        usario_id: {
            type: dataTypes.INTEGER
        },
        producto_id: {
            type: dataTypes.INTEGER
        },
        cantidad: {
            type: dataTypes.INTEGER
        },
    }
    
    let config = {
        timestamps: false,
        tableName: 'usuario_producto',
        
    }

    let Carrito = sequelize.define(alias, cols, config);



    
return Carrito;
}