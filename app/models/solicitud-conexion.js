import DS from 'ember-data';

export default DS.Model.extend({
  fecha: DS.attr('date'),
  estado: DS.attr('boolean'),

  emisor: DS.belongsTo('usuario', { inverse: null }),
  receptor: DS.belongsTo('usuario'),

  // Como ocurre con el modelo chat, este es un atributo usado para optimizar
  // el emparejamiento de chat cuando se hace una solicitud de conexion, este
  // es un atributo puramente tecnico que no pertenece como tal al dominio y Por
  // tanto no aparece ni el el diagrama de clases ni en el modelo del dominio
  chat: DS.belongsTo('chat')
});
