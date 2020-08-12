window.addEventListener('load', function(){

    let formulario = document.querySelector('form');

    formulario.addEventListener('submit', function(e){
        
        let errores = [];

        let nombre = document.querySelector('input.nombre');

        if(nombre.value == ""){
            errores.push('El nombre no puede estar vacío.')
        }else if(nombre.value.length < 4){
            errores.push('El nombre debe tener al menos 4 caracteres.')
        };

        let email = document.querySelector('input.email');

        if(email.value == ""){
            errores.push('El mail no puede estar vacío.')
        };

        let password = document.querySelector('input.password');

        if(password.value ==""){
            errores.push('La contraseña no debe estar vacía.')
        }else if(password.value.length < 7){
            errores.push('La contraseña debe tener al menos 7 caracteres.')
        };
        
        if(errores.length > 0){
            e.preventDefault();

            let ulErrores = document.querySelector("div.errores ul");
            for (let i = 0; i < errores.length; i++) {
                
                ulErrores.innerHTML += "<li>"+errores[i]+"</li>"
            }
        }
    })
});