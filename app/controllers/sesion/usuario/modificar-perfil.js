import Controller from '@ember/controller';

export default Controller.extend({
    idUser: null,
    cargando: false,
    actions: {
        actualizar() {
            let self = this;
            let { contraseña, confirmacionContraseña, nombre,
                genero, ocupacion, biografia, ubicacion, fotoDePerfil,
                generoPreferido, ubicacionPreferida, rangoEdadPreferido } =
                this.getProperties('contraseña', 'confirmacionContraseña', 'nombre',
                    'genero', 'ocupacion', 'biografia', 'ubicacion',
                    'fotoDePerfil', 'generoPreferido', 'ubicacionPreferida',
                    'rangoEdadPreferido');

            if (contraseña == null || confirmacionContraseña == null ||
                nombre == null || ocupacion == null || biografia == null ||
                ubicacion == null ||

                contraseña == '' || confirmacionContraseña == '' || nombre == '' ||
                ocupacion == '' || biografia == '' || ubicacion == '' ||
                fotoDePerfil == '') {

                window.alert('Por favor llene por completo todos los campos');
            } else if (contraseña != confirmacionContraseña) {
                //Contraseñas no coincidem
                window.alert('Las contraseñas no coinciden');
            } else {
                this.set('cargando', true);
                this.get('store').findRecord('usuario', this.get('idUser').id).then(function (usuario) {
                    usuario.set('contraseña', contraseña);
                    usuario.set('nombre', nombre);
                    usuario.set('genero', genero);
                    usuario.set('ocupacion', ocupacion);
                    usuario.set('biografia', biografia);
                    usuario.set('fotoDePerfil', fotoDePerfil);
                    usuario.set('ubicacion', ubicacion);
                    usuario.set('estado', false);
                    usuario.set('generoPreferido', generoPreferido);
                    usuario.set('ubicacionPreferida', ubicacionPreferida);
                    usuario.set('rangoEdadPreferido', [rangoEdadPreferido[0], rangoEdadPreferido[1]]);

                    usuario.save().then(function () {
                        self.set('cargando', false);
                        window.alert('Perfil actualizado');                    
                        self.transitionToRoute('sesion.usuario');
                    }).catch(function () {
                        this.set('cargando', false);
                        window.alert('Ha ocurrido un error, no se pudo actualizar la información')
                    });
                });
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
        }
    }
});
