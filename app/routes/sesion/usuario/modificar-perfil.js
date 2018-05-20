import Route from '@ember/routing/route';

export default Route.extend({
  idUser: null,
  setupController() {
      this.controller.set('idUser', this.get('idUser'));
      let self = this;
      this.get('store').findRecord('usuario', this.get('idUser').id).then(function(usuario) {
        self.controller.set('contraseña', usuario.get('contraseña'));
        self.controller.set('confirmacionContraseña', usuario.get('contraseña'));
        self.controller.set('nombre', usuario.get('nombre'));
        self.controller.set('genero', usuario.get('genero'));
        self.controller.set('ocupacion', usuario.get('ocupacion'));
        self.controller.set('biografia', usuario.get('biografia'));
        self.controller.set('ubicacion', usuario.get('ubicacion'));
        self.controller.set('fotoDePerfil', usuario.get('fotoDePerfil'));
        self.controller.set('generoPreferido', usuario.get('generoPreferido'));
        self.controller.set('rangoEdadPreferido', [usuario.get('rangoEdadPreferido')[0],usuario.get('rangoEdadPreferido')[1]]);
      });
    },
    model() {
      this.set('idUser', this.modelFor('sesion/usuario'))
      return this.modelFor('sesion/usuario');
    }
});
