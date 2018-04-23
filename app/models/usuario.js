import DS from 'ember-data';

export default DS.Model.extend({
    nombreUsuario: DS.attr('string'),
    contraseña: DS.attr('string'),
    fechaNacimiento: DS.attr('date'),
    nombre: DS.attr('string'),
    genero: DS.attr('string'),
    ocupacion: DS.attr('string'),
    biografia: DS.attr('string'),
    fotoDePerfil: DS.attr('string'),
    estado: DS.attr('boolean'),
    generoPreferido:  DS.attr('string'),
    rangoEdadPreferido:  DS.attr()
});
