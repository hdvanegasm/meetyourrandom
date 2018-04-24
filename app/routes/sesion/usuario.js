import Route from '@ember/routing/route';
import { inject as Service } from '@ember/service';
export default Route.extend({
  session: Service('session'),
  beforeModel: function() {
    console.log(this.get('session').isUnauthorized);
    if(!this.get('session').isAuthorized){
        this.transitionTo('interfaz-principal');
    }
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    cerrarSesion: function(){
        this.get('session').close();
        this.transitionTo('interfaz-principal');
    }
   
  }

});
