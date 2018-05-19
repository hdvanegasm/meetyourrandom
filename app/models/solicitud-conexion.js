import DS from 'ember-data';

export default DS.Model.extend({
  fecha: DS.attr('date'),
  respuesta: DS.attr('boolean'),

  emisor: DS.belongsTo('usuario', { inverse: null }),
  receptor: DS.belongsTo('usuario')
});
