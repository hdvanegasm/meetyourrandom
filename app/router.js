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
<<<<<<< HEAD
=======
  this.route('interfaz-principal');

  this.route('sesion', function() {
    this.route('usuario');
  });
>>>>>>> 36d9ead9cac644135ea50feb9b76450a6b1e6997
});

export default Router;
