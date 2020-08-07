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
        }
    }
   
    let config = {
        tableName: 'productos',
        timeStamps: false
    }

    let Producto = sequelize.define(alias, cols, config);


    Producto.associate = function(models){
        Producto.belongsToMany(models.Usuario,{
            as: 'usuarios',
            through: 'usuario_producto',
            foreignKey: 'producto_id',
            otherKey: 'usuario_id',
            timeStamps: false
        })
    }

return Producto;
}