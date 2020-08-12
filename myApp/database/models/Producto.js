module.exports = function(sequelize, dataTypes) {
   
    let alias = 'Producto';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descripcion:{
            type: dataTypes.STRING
        },
        imagen:{
            type: dataTypes.STRING
        },
        precio: {
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
    }
    
    let config = {
        timestamps: false,
        tableName: 'productos',
        
    }

    let Producto = sequelize.define(alias, cols, config);



    Producto.associate = function(models){
        Producto.belongsToMany(models.Usuario,{
            as: 'usuarios',
            through: 'usuario_producto',
            foreignKey: 'usuario_producto_fk_1',
            otherKey: 'usuario_producto_fk_2',
            timeStamps: false
        })
    }

return Producto;
}