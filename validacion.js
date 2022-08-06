//validación en javascript acá
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});
  
  function validarFormulario(evento) {
    evento.preventDefault();

    //validar nombre
    var name = document.getElementById('name').value;
    if(name.length == 0 || name.length <= 2) {
        swal('Nombre Obligatorio');
        return;
    }

    if(name.length >= 20){
        swal("El nombre debe contener máximo 20 caracteres");
        return;
    }
    
    //validar email
    var email = document.getElementById('email').value;
    if (email.length == 0) {
        swal("Email obligatorio");
        return;
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/)) {
        swal('El E-mail es inválido, sugerencia:  example@gmail.com');
        return false;
    }

    //validar asunto
    var asunto = document.getElementById('asunto').value;
    if (asunto.length == 0) {
        swal('Asunto Obligatorio');
        return;
    }

    if (asunto.length <= 3) {
        swal('Cantidad de caracteres inválidos en el Asunto!');
        return;
    }

    if(asunto.length >= 30){
        swal("El asunto debe contener máximo 30 caracteres");
        return;
    }

    //validar mensaje
    var mensaje = document.getElementById('mensaje').value;
    if(mensaje.length == 0 || mensaje.length <= 3) {
        swal('Mensaje Obligatorio');
        return;
    }

    if (mensaje.length >= 500) {
        swal('El mensaje debe contener máximo 500 caracteres!');
        return;
    }

    this.submit();
  }