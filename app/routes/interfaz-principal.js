import Route from '@ember/routing/route';
import { inject as Service } from '@ember/service';

export default Route.extend({

  session: Service('session'),
  beforeModel: function() {
    var session = JSON.parse(window.localStorage.getItem('firebase:authUser:AIzaSyCDAvC1sGNj2JfyAthgjs_PTzaTkLp3xZI:[DEFAULT]'));
    if(session){
  		this.replaceWith('sesion.usuario', session.uid)
    }
  },

});
