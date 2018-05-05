import Controller from '@ember/controller';
export default Controller.extend({
    cargando: false,
    actions: {
        cerrarSesion: function () {
            this.set('cargando', true);
            this.get('session').close().then(() => {
                this.set('cargando', false);
                this.transitionToRoute('interfaz-principal');
            })
        }
    }
});
