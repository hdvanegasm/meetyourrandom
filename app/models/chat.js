import DS from 'ember-data';

export default DS.Model.extend({
    // Atributos
    /*
    Estado:
        * finalizado (al menos un usuario se salio)
        * conversacion (los dos usuarios estan en conversacion)
        * iniciado (acaba de iniciar el chat pero hay solo un usuario)
        * rechazado (durante la invitacion a conexion el usuario rechaza la invitacion)
    */
    estado: DS.attr('string'),

    // Relaciones
    mensajes: DS.hasMany('mensaje'),
    usuarios: DS.hasMany('usuario'),

    favoritos: DS.hasMany('usuario')
});
