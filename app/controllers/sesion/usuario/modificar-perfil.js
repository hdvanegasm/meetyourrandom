import Controller from '@ember/controller';

export default Controller.extend({
    idUser: null,
    cargando: false,
    actions: {
        actualizar() {
            let self = this;
            let { contraseña, confirmacionContraseña, nombre,
                genero, ocupacion, biografia, ubicacion, fotoDePerfil,
                generoPreferido, rangoEdadPreferido } =
                this.getProperties('contraseña', 'confirmacionContraseña', 'nombre',
                    'genero', 'ocupacion', 'biografia', 'ubicacion',
                    'fotoDePerfil', 'generoPreferido',
                    'rangoEdadPreferido');


            let alerta = document.getElementById('alerta');
            let clickMe = document.getElementById('clickMe');
            if (contraseña == null || confirmacionContraseña == null ||
                nombre == null || ocupacion == null || biografia == null ||
                ubicacion == null ||

                contraseña == '' || confirmacionContraseña == '' || nombre == '' ||
                ocupacion == '' || biografia == '' || ubicacion == '' ||
                fotoDePerfil == '') {

                alerta.innerHTML = 'Por favor llene por completo todos los campos';
                clickMe.click();
            } else if (contraseña != confirmacionContraseña) {
                //Contraseñas no coincidem
                alerta.innerHTML = 'Las contraseñas no coinciden';
                clickMe.click();
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
                    usuario.set('rangoEdadPreferido', [rangoEdadPreferido[0], rangoEdadPreferido[1]]);                    
                    usuario.save().then(function () {
                        alerta.innerHTML = 'Perfil actualizado';
                        clickMe.click();
                        self.set('cargando', false);
                    }).catch(function () {
                        self.set('cargando', false);
                        alerta.innerHTML = 'Ha ocurrido un error, no se pudo actualizar la información';
                        clickMe.click();
                    });
                });
            }

        },

        seleccionarFoto: function (event) {
            const reader = new FileReader();
            const file = event.target.files[0];
            let imageData;
            let alerta = document.getElementById('alerta');
            let clickMe = document.getElementById('clickMe');
            if (file.type != 'image/jpeg') {
                if (file.type != 'image/png') {
                    alerta.innerHTML = 'Formato de imagen no reconocido';
                    clickMe.click();
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

        }
    }
});
