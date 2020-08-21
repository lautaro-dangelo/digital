window.addEventListener('load', function(){

    let formulario = document.querySelector('form');

    formulario.addEventListener('submit', function(e){
        
        let errores = [];
        
        let email = document.querySelector('input.email');

        if(email.value == ""){
            errores.push('El mail no puede estar vacío.')
        };

        let password = document.querySelector('input.password');

        if(password.value ==""){
            errores.push('La contraseña no debe estar vacía.')
        };
        
        if(errores.length > 0){
            e.preventDefault();
            
            let ulErrores = document.querySelector("div.errores ul");

                ulErrores.innerHTML = ''

            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>"+errores[i]+"</li>"
            }
        }
    })
});