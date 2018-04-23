import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        registrar() {
            let { nombreUsuario, contraseña, confirmacionContraseña, nombre, fechaNacimiento,
                genero, ocupacion, biografia, fotoDePerfil, generoPreferido, ubicacionPreferida,
                rangoEdadPreferido} =
                this.getProperties('nombreUsuario', 'contraseña', 'confirmacionContraseña', 'nombre',
                    'fechaNacimiento', 'genero', 'ocupacion', 'biografia', 'fotoDePerfil', 
                    'generoPreferido', 'ubicacionPreferida', 'rangoEdadPreferido');

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
            console.log(rangoEdadPreferido[0]);
            console.log(rangoEdadPreferido[1]);
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
