import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('usuarios', function() {
    this.route('registro');
  });
  this.route('interfaz-principal');
  this.route('sesion', function() {
        this.route('usuario', {path: ':id'}, function() {
          this.route('modificar-perfil');
        });
  });
});

export default Router;
