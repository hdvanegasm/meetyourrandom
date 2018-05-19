import Controller from '@ember/controller';
import * as firebase from 'firebase';

export default Controller.extend({
  cargando: false,
  actions: {
    registrar() {
      let self = this;
      let { email, contraseña, confirmacionContraseña, nombre, fechaNacimiento,
        genero, ocupacion, biografia, ubicacion, fotoDePerfil,
        generoPreferido, ubicacionPreferida, rangoEdadPreferido } =
        this.getProperties('email', 'contraseña', 'confirmacionContraseña', 'nombre',
        'fechaNacimiento', 'genero', 'ocupacion', 'biografia', 'ubicacion',
        'fotoDePerfil', 'generoPreferido', 'ubicacionPreferida',
        'rangoEdadPreferido');

        //Obtener fecha actual como string
        let hoy = new Date();
        let dd = hoy.getDate();
        let mm = hoy.getMonth() + 1; //hoy es 0!
        let yyyy = hoy.getFullYear();

        if (dd < 10) {
          dd = '0' + dd
        }
        if (mm < 10) {
          mm = '0' + mm
        }
        hoy = yyyy + '-' + mm + '-' + dd;


        // Al menos un campo requerido está vacío
        if (email == null || contraseña == null || confirmacionContraseña == null ||
          nombre == null || fechaNacimiento == null || ocupacion == null || biografia == null ||
          ubicacion == null || fotoDePerfil == '/default.png' || email == '' ||
          contraseña == '' || confirmacionContraseña == '' || nombre == '' ||
          fechaNacimiento == '' || ocupacion == '' || biografia == '' || ubicacion == '' ||
          fotoDePerfil == '') {

            window.alert('Por favor llene por completo todos los campos');
          } else if (contraseña != confirmacionContraseña) {
            //Contraseñas no coincidem
            window.alert('Las contraseñas no coinciden');
          } else if (fechaNacimiento >= hoy) {
            // Fecha de Nacimiento mayor a la actual
            window.alert('Por favor ingrese una fecha previa a la del dia de hoy');
          } else {
            firebase.auth().createUserWithEmailAndPassword(email, contraseña).then((user) => {
              self.set('cargando',true);
              var nuevoUsuario = self.store.createRecord('usuario', {
                id: user.uid,
                email: email,
                contraseña: contraseña,
                fechaNacimiento: new Date(fechaNacimiento),
                nombre: nombre,
                genero: genero,
                ocupacion: ocupacion,
                biografia: biografia,
                ubicacion: ubicacion,
                fotoDePerfil: fotoDePerfil,
                estado: false,
                generoPreferido: generoPreferido,
                ubicacionPreferida: ubicacionPreferida,
                rangoEdadPreferido: [rangoEdadPreferido[0], rangoEdadPreferido[1]]
              });
              let listaFavoritosNuevoUsuario = self.store.createRecord('lista-favoritos');
              nuevoUsuario.set('listaFavoritos', listaFavoritosNuevoUsuario);
              nuevoUsuario.save().then(function() {
                window.alert('Registro exitoso');
                self.set('cargando',false);
                listaFavoritosNuevoUsuario.set('propietario', nuevoUsuario);
                listaFavoritosNuevoUsuario.save().then(() => {
                  self.transitionToRoute('interfaz-principal');
                });
              })
            }).catch((error) => {
              if(error.code === 'auth/invalid-email'){
                window.alert('El email está mal formado');
              } else if(error.code = 'auth/email-already-in-use'){
                window.alert('El email ya existe');
              } else{
                window.alert(error.message);
              }

            });
          }
        },
        seleccionarFoto: function (event) {
          const reader = new FileReader();
          const file = event.target.files[0];
          let imageData;

          if (file.type == 'image/jpeg' || file.type == 'image/png') {
            reader.onload = () => {
              imageData = reader.result;
              this.set('fotoDePerfil', imageData);
            }
            if (file) {
              reader.readAsDataURL(file);
            }
          } else {
            window.alert('Formato de imagen no reconocido');
          }

        },
        seleccionarUbicacion(ubicacion) {
          this.set('ubicacionPreferida', ubicacion);
        }
      }
    });
