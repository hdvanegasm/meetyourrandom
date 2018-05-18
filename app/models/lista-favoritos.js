import DS from 'ember-data';

export default DS.Model.extend({
    usuarios: DS.hasMany('usuario', { inverse: null }),
    propietario: DS.belongsTo('usuario')
});
