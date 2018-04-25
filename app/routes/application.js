import Route from '@ember/routing/route';
import * as firebase from 'firebase';
import ENV from 'meetyourrandom/config/environment';

firebase.initializeApp(ENV.firebase);

export default Route.extend({
  beforeModel: function() {
    this.transitionTo('interfaz-principal');
  },
});
