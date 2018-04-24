import Controller from '@ember/controller';
import { inject as Service } from '@ember/service';

export default Controller.extend({
 
   session: Service('session'),
   actions: {
        iniciarSesion: function(provider) {
          let self = this;
          console.log(this.get('email'));
          this.get('session').open('firebase', { 
            provider: provider,
            email: self.get('email'),
            password: self.get('password')})
                .then(function(data) {
                    self.transitionToRoute('sesion.usuario');
                    console.log(data.currentUser);
                });
        },
        cerrarSesion: function(){
            this.get('session').close();
        }
    }

});
