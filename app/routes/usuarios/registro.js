import Route from '@ember/routing/route';

export default Route.extend({
    setupController() {
        this.controller.set('genero', 'femenino');
        this.controller.set('generoPreferido', 'masculino');
        this.controller.set('fotoDePerfil', '/default.png');
        this.controller.set('ubicacionPreferida', 'ciudad');
      },
});
