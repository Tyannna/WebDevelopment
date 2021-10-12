
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("formulario").addEventListener('submit', validarFormulario);
      });
      
      function validarFormulario(evento) {
        evento.preventDefault();
      
      
        //USUARIO -> VALIDACION 
        var usuario = document.getElementById('Usuario').value;
          if(usuario.length >20){
            alert('Usuario no puede tener mas de 20 caracteres)');
          return;
        }
        if(usuario.length < 10 ){
          alert('Usuario debe tener al menos de 10 caracteres)')
          return;
        }
        var valid_user = validar_usuario(usuario)
        if(!valid_user){
            alert('El Usuario no puede contener caracteres extraños')
            return;
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


        alert('Formulario diligenciado correctamente');
        this.submit();
      }

      // USUARIO -> VALIDACION
      function validar_usuario(user){
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if(format.test(user)) return false;
        else return true;
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



    // CALCULAR EDAD:
    function calcularEdad(){
        var fechaNac = new Date(document.getElementById("FechaNacimiento").value);
        var diaNac = fechaNac.getDate();
        var mesNac = fechaNac.getMonth();
        var anoNac = fechaNac.getFullYear();

        var fechaHoy = new Date();
        var diaHoy = fechaHoy.getDate();
        var mesHoy = fechaHoy.getMonth();
        var anoHoy = fechaHoy.getFullYear();

        var edad_calc = 0;
        
        if(mesHoy > mesNac) edad_calc = anoHoy - anoNac;
        else if(mesHoy == mesNac){
            if(diaHoy >= diaNac) edad_calc = anoHoy - anoNac;
            else edad_calc = anoHoy - anoNac - 1;
        }
        else edad_calc = anoHoy - anoNac -1;

       
        var edad = edad_calc;
        

        document.getElementById("Edad").value = `${edad_calc} años`;

    }

    
// SELECCIONAR DEPARTAMENTO -> MUNICIPIO 
$.ajax({
  
  url: 'https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json', type: 'GET', dataType: 'json',
  
  success: function (json) {

    var departamento = `<option value="" selected disabled>- Seleccione una departamento -</option>`;
    //+++
    for (let item of json) {
      departamento += `<option value="${json.indexOf(item)}">${item.departamento}</option>`;
    }
  
    $('#departamentos').html(departamento);
    $('select').formSelect();

    $('#departamentos').on('change', function () {
      var municipio = `<option value="" selected disabled>- Seleccione un municipio -</option>`;
      //+++
      for (let item of json[$(this).val()].ciudades) {
        municipio += `<option value="${json[$(this).val()].ciudades.indexOf(item)}">${item}</option>`;
      }

      $('#municipios').html(municipio);
      $('select').formSelect();

    });
  }
  
  })



