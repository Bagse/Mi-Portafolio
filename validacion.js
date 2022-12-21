//validación en javascript acá
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});
  
  function validarFormulario(evento) {
    evento.preventDefault();

    //validar nombre
    var name = document.getElementById('name').value;
    if(name.length == 0 || name.length <= 2) {
        swal("Opps!", 'Nombre Obligatorio!! Debe contener mínimo 3 caracteres y máximo 20.', "warning");
        return;
    }

    if(name.length >= 20){
        swal("Opps!", "El nombre debe contener máximo 20 caracteres", "warning");
        return;
    }
    
    //validar email
    var email = document.getElementById('email').value;
    if (email.length == 0) {
        swal("Opps!", "Email obligatorio", "warning");
        return;
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/).test(email)) {
        swal("Opps!", 'El email es inválido!! Inténtelo de nuevo :) Ejemplo:  example@gmail.com', "warning");
        return false;
    }

    //validar asunto
    var asunto = document.getElementById('asunto').value;
    if (asunto.length == 0) {
        swal("Opps!", 'Asunto Obligatorio', "warning");
        return;
    }

    if (asunto.length <= 3) {
        swal("Opps!", 'Cantidad de caracteres inválidos en el Asunto!', "warning");
        return;
    }

    if(asunto.length >= 30){
        swal("Opps!", "El asunto debe contener máximo 30 caracteres", "warning");
        return;
    }

    //validar mensaje
    var mensaje = document.getElementById('mensaje').value;
    if(mensaje.length == 0 || mensaje.length <= 3) {
        swal("Opps!", 'Mensaje Obligatorio!! Debe contener mínimo 4 caracteres y máximo 120.', "warning");
        return;
    }

    if (mensaje.length >= 500) {
        swal("Opps!", 'El mensaje debe contener máximo 500 caracteres!', "warning");
        return;
    }

    this.submit();
  }