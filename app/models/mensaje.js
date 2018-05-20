import DS from 'ember-data';

export default DS.Model.extend({
    // Atributos
    contenido: DS.attr('string'),
    fecha: DS.attr('date'),

    // Relaciones
    emisor: DS.belongsTo('usuario'),
    chat: DS.belongsTo('chat')
});
