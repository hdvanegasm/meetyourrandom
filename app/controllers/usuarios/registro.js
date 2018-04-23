import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        registrar() {
            let { nombreUsuario, contraseña, confirmacionContraseña, nombre, fechaNacimiento,
                genero, ocupacion, biografia, fotoDePerfil, generoPreferido, ubicacionPreferida} =
                this.getProperties('nombreUsuario', 'contraseña', 'confirmacionContraseña', 'nombre',
                    'fechaNacimiento', 'genero', 'ocupacion', 'biografia', 'fotoDePerfil', 
                    'generoPreferido', 'ubicacionPreferida');

            console.log(nombreUsuario);
            console.log(contraseña);
            console.log(confirmacionContraseña);
            console.log(nombre);
            console.log(fechaNacimiento);
            console.log(genero);
            console.log(ocupacion);
            console.log(biografia);
            console.log(fotoDePerfil);
            console.log(generoPreferido);
            console.log(ubicacionPreferida);
        },
        seleccionarFoto: function (event) {
            const reader = new FileReader();
            const file = event.target.files[0];
            let imageData;

            reader.onload = () => {
                imageData = reader.result;
                this.set('fotoDePerfil', imageData);

            };

            if (file) {
                reader.readAsDataURL(file);
            }
        },
        seleccionarUbicacion (ubicacion) {
            this.set('ubicacionPreferida', ubicacion);
        }
    }
});
