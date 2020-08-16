import React from 'react';

function Producto(props){
return(
    <div>
<h2>Nombre: {props.nombre}</h2>
<p>Descripción: {props.descripcion}</p>
<h3>Precio: {props.precio}</h3>
    </div>
)
};

export default Producto;