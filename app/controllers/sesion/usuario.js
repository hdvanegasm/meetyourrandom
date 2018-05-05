import Controller from '@ember/controller';
export default Controller.extend({
  
    actions: {
        cerrarSesion: function(){
            this.get('session').close().then(() => {
              this.transitionToRoute('interfaz-principal');       
            })
        }      
      }
});
