const axios = require('axios');
const defaults = require('./default');

let url = 'productos';

let productoRequest = {
    getProducto: function(id){
        return axios ({
        ...defaults,
        method: 'GET',
        url: `${url}/${id}`
    })}
};


module.exports productoRequest;