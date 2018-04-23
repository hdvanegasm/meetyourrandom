import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        registrar() {
            let { nombreUsuario, contraseña, confirmacionContraseña, nombre, fechaNacimiento,
                genero, ocupacion, biografia, pais, provincia, ciudad, fotoDePerfil,
                generoPreferido, ubicacionPreferida, rangoEdadPreferido } =
                this.getProperties('nombreUsuario', 'contraseña', 'confirmacionContraseña', 'nombre',
                    'fechaNacimiento', 'genero', 'ocupacion', 'biografia', 'pais', 'provincia',
                    'fotoDePerfil', 'ciudad', 'generoPreferido', 'ubicacionPreferida',
                    'rangoEdadPreferido');

            console.log('------------------------------------------------');
            console.log(nombreUsuario);
            console.log(contraseña);
            console.log(confirmacionContraseña);
            console.log(nombre);
            console.log(fechaNacimiento);
            console.log(genero);
            console.log(ocupacion);
            console.log(biografia);
            console.log(pais);
            console.log(provincia);
            console.log(ciudad);
            console.log(fotoDePerfil);
            console.log(generoPreferido);
            console.log(ubicacionPreferida);
            console.log(rangoEdadPreferido[0]);
            console.log(rangoEdadPreferido[1]);


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
            if (nombreUsuario == null || contraseña == null || confirmacionContraseña == null ||
                nombre == null, fechaNacimiento == null || ocupacion == null || biografia == null ||
                pais == null || provincia == null || ciudad == null || fotoDePerfil == '/default.png' ||
                nombreUsuario == '' || contraseña == '' || confirmacionContraseña == '' || nombre == '' ||
                fechaNacimiento == '' || ocupacion == '' || biografia == '' || fotoDePerfil == '') {

                window.alert('Por favor llene por completo todos los campos');
                //Contraseñas no coincidem
            } else if (contraseña != confirmacionContraseña) {
                window.alert('Las contraseñas no coinciden');
                // Fecha de Nacimiento mayor a la actual
            } else if (fechaNacimiento >= hoy) {
                window.alert('Por favor ingrese una fecha previa a la del dia de hoy');
            }
        },
        seleccionarFoto: function (event) {
            const reader = new FileReader();
            const file = event.target.files[0];
            let imageData;

            if (file.type != 'image/jpeg') {
                if (file.type != 'image/png') {
                    window.alert('Formato de imagen no reconocido');
                }
            } else {
                reader.onload = () => {
                    imageData = reader.result;
                    this.set('fotoDePerfil', imageData);
                }
                if (file) {
                    reader.readAsDataURL(file);
                }
            }

        },
        seleccionarUbicacion(ubicacion) {
            this.set('ubicacionPreferida', ubicacion);
        },
        seleccionarCiudad(ciudad) {
            this.set('ciudad', ciudad);
        },
        seleccionarProvincia(provincia) {
            this.set('provincia', provincia);
        },
        seleccionarPais(pais) {
            this.set('pais', pais);
        }
    }
});
