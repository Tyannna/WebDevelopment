
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("formulario").addEventListener('submit', validarFormulario);
      });
      
      function validarFormulario(evento) {
        evento.preventDefault();
      
      
      //NOMBRE -> VALIDACION 
        var nombre = document.getElementById('Nombre').value;
        if(nombre.length == 0) {
          alert('Campo vacio');
          return;
        }
        if(nombre.length > 25){
          alert('El nombre no puede exceder los 25 caracteres');
          return;
        }
      
      //APELLIDO -> VALIDACION 
        var apellido = document.getElementById('Apellido').value;
        if(apellido.length == 0) {
          alert('Campo vacio');
          return;
        }
        if(apellido.length > 25){
          alert('El apellido no puede exceder los 25 caracteres');
          return;
        }
      
        //DIRECCION -> VALIDACION 
        var direccion = document.getElementById('Direccion').value;
        if(direccion.length == 0) {
          alert('Campo vacio');
          return;
        }
        if(!(direccion.toLowerCase().includes('cll') || direccion.toLowerCase().includes('cra') || direccion.toLowerCase().includes('av')
        || direccion.toLowerCase().includes('anv') || direccion.toLowerCase().includes('trans'))){
            alert('Ingrese una direccion valida');
          return;
        }
      
      
        //USUARIO -> VALIDACION 
        var usuario = document.getElementById('Usuario').value;
          if(usuario.length >20){
            alert('Usuario no puede tener mas de 20 caracteres)');
          return;
        }
        if(usuario.length < 10 ){
          alert('Usuario debe tener al menos de 10 caracteres)')
        }
      
      
       //CONTRASEÑA -> VALIDACION 
      
        var clave = document.getElementById('Contraseña').value;
        if (clave.length == 0) {
          alert('Campo vacio');
          return;
        }
        if(clave.length < 15 ){
            alert('La Contraseña debe tener al menos 15 caracteres')
          return;
        }
        if(clave.length > 20){
            alert('Contraseña no puede tener mas de 20 caracteres)');
          return;
        }
      
        var validado = validar_clave(clave);
        if(!validado){
            alert('La contraseña debe tener al menos una mayuscula, una minuscula, un numero y un caracter (&,/,#,%)');
          return;
        }
      
        var confclave = document.getElementById('ConfirmarContraseña').value;
        if (!(confclave === clave)) {
          alert('las contraseñas no coinciden');
          return;
        }
      
        // CORREO -> VALIDACION
        var correo = document.getElementById('CorreoElectronico').value;
        if (correo.length > 120) {
          alert('El limite de caracteres es 120');
          return;
        }
        if (correo.length == 0){
          alert('Campo vacio');
          return;
        }

        var telefono = document.getElementById('Numero').value;
        if (telefono.length > 20) {
          alert('El limite de caracteres es 20');
          return;
        }
        if (correo.length == 0){
          alert('Campo vacio');
          return;
        }

        alert('Formulario diligenciado correctamente');
        this.submit();
      }
      
      
      
      function validar_clave(password)
              {
                  if(password.length >= 8)
                  {
                      var mayuscula = false;
                      var minuscula = false;
                      var numero = false;
                      var caracter_raro = false;
      
                      for(var i = 0;i<password.length;i++)
                      {
                          if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90)
                          {
                              mayuscula = true;
                          }
                          else if(password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)
                          {
                              minuscula = true;
                          }
                          else if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57)
                          {
                              numero = true;
                          }
                          else
                          {
                              caracter_raro = true;
                          }
                      }
                      if(mayuscula == true && minuscula == true && caracter_raro == true && numero == true)
                      {
                          return true;
                      }
                  }
                  return false;
              }





    // INPUT DE RADIO : "REGISTRO DE GUSTOS" -> HABILITA SECCION
    function Openform()
    {
    document.getElementById('form1').style.display = 'block';

    }

    // BARRA -> valor máximo dispuesto a gastar en un vehiculo (input range)
    function updateTextInput(val) {
        document.getElementById('textInput').value=val; 
    }
