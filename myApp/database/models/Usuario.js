module.exports = function(sequelize, dataTypes) {
   
    let alias = 'Usuario';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        mail:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        }
    }
   
    let config = {
        tableName: 'usuarios',
        timeStamps: false
    }

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.belongsToMany(models.Producto,{
            as: 'productos',
            through: 'usuario_producto',
            foreignKey: 'usuario_id',
            otherKey: 'producto_id',
            timeStamps: false
        })
    }
return Usuario;
}