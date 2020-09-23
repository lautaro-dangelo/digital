module.exports = function(sequelize, dataTypes) {
   
    let alias = 'Usuario';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        },
        admin: {
            type: dataTypes.BOOLEAN
        }
    }
   
    let config = {
        tableName: 'usuarios',
        timestamps: false
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