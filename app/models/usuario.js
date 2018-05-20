import DS from 'ember-data';

export default DS.Model.extend({
    email: DS.attr('string'),
    contraseña: DS.attr('string'),
    fechaNacimiento: DS.attr('date'),
    nombre: DS.attr('string'),
    genero: DS.attr('string'),
    ocupacion: DS.attr('string'),
    biografia: DS.attr('string'),
    ubicacion: DS.attr('string'),
    fotoDePerfil: DS.attr('string'),
    generoPreferido:  DS.attr('string'),
    rangoEdadPreferido:  DS.attr(),

    // Relaciones
    listaFavoritos: DS.belongsTo('lista-favoritos', { inverse: 'propietario'}),
    solicitudes: DS.hasMany('solicitud-conexion', { inverse: 'receptor'})
});
