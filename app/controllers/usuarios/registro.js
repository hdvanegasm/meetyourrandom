import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        registrar() {
            let { nombreUsuario, contraseña, confirmacionContraseña, nombre, fechaNacimiento,
                genero, ocupacion, biografia, ubicacion, fotoDePerfil,
                generoPreferido, ubicacionPreferida, rangoEdadPreferido } =
                this.getProperties('nombreUsuario', 'contraseña', 'confirmacionContraseña', 'nombre',
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

            // Revisar si nombreUsuario existe en la base de datos          
            var usuario = this.store.findAll('usuario');

            // Al menos un campo requerido está vacío
            if (nombreUsuario == null || contraseña == null || confirmacionContraseña == null ||
                nombre == null, fechaNacimiento == null || ocupacion == null || biografia == null ||
                ubicacion == null || fotoDePerfil == '/default.png' || nombreUsuario == '' || 
                contraseña == '' || confirmacionContraseña == '' || nombre == '' ||
                fechaNacimiento == '' || ocupacion == '' || biografia == '' || ubicacion == '' ||
                fotoDePerfil == '') {

                window.alert('Por favor llene por completo todos los campos');
                //Contraseñas no coincidem
            } else if (contraseña != confirmacionContraseña) {
                window.alert('Las contraseñas no coinciden');
                // Fecha de Nacimiento mayor a la actual
            } else if (fechaNacimiento >= hoy) {
                window.alert('Por favor ingrese una fecha previa a la del dia de hoy');
            } else {

                var nuevoUsuario = this.store.createRecord('usuario', {
                    nombreUsuario: nombreUsuario,
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
                nuevoUsuario.save();
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
