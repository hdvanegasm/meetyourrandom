import Controller from '@ember/controller';
import * as firebase from 'firebase';

export default Controller.extend({
  cargando: false,
  actions: {
    registrar() {
      let self = this;
      let { email, contraseña, confirmacionContraseña, nombre, fechaNacimiento,
        genero, ocupacion, biografia, ubicacion, fotoDePerfil,
        generoPreferido, rangoEdadPreferido } =
        this.getProperties('email', 'contraseña', 'confirmacionContraseña', 'nombre',
          'fechaNacimiento', 'genero', 'ocupacion', 'biografia', 'ubicacion',
          'fotoDePerfil', 'generoPreferido', 'rangoEdadPreferido');

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

      let alerta = document.getElementById('alerta');
      let clickMe = document.getElementById('clickMe')
      // Al menos un campo requerido está vacío
      if (email == null || contraseña == null || confirmacionContraseña == null ||
        nombre == null || fechaNacimiento == null || ocupacion == null || biografia == null ||
        ubicacion == null || fotoDePerfil == '/default.png' || email == '' ||
        contraseña == '' || confirmacionContraseña == '' || nombre == '' ||
        fechaNacimiento == '' || ocupacion == '' || biografia == '' || ubicacion == '' ||
        fotoDePerfil == '') {
        alerta.innerHTML = 'Por favor llene por completo todos los campos';
        clickMe.click();
      } else if (contraseña != confirmacionContraseña) {
        //Contraseñas no coinciden
        alerta.innerHTML = 'Las contraseñas no coinciden';
        clickMe.click();
      } else if (fechaNacimiento >= hoy) {
        // Fecha de Nacimiento mayor a la actual
        alerta.innerHTML = 'Por favor ingrese una fecha previa a la del dia de hoy';
        clickMe.click();
      } else {
        firebase.auth().createUserWithEmailAndPassword(email, contraseña).then((user) => {
          self.set('cargando', true);
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
            generoPreferido: generoPreferido,
            rangoEdadPreferido: [rangoEdadPreferido[0], rangoEdadPreferido[1]]
          });
          let listaFavoritosNuevoUsuario = self.store.createRecord('lista-favoritos');
          nuevoUsuario.set('listaFavoritos', listaFavoritosNuevoUsuario);
          nuevoUsuario.save().then(function () {
            alerta.innerHTML = 'Registro exitoso';
            clickMe.click();
            self.set('cargando', false);
            listaFavoritosNuevoUsuario.set('propietario', nuevoUsuario);
            listaFavoritosNuevoUsuario.save().then(() => {
              self.transitionToRoute('interfaz-principal');
            });
          })
        }).catch((error) => {
          if (error.code === 'auth/invalid-email') {
            alerta.innerHTML = 'El email está mal formado';
            clickMe.click();
          } else if (error.code === 'auth/email-already-in-use') {
            alerta.innerHTML = 'El email ya existe';
            clickMe.click();
          } else {
            alerta.innerHTML = 'Ha ocurrido un error, no se pudo registrar la información';
            clickMe.click();
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
        document.getElementById('alerta').innerHTML = 'Formato de imagen no reconocido';
        document.getElementById('clickMe').click();
      }

    }
  }
});
