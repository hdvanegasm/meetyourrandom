import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    sesion: service('session'),
    actions: {
        enviar() {
            let mensaje = this.get('contenidoMensaje');

            let nuevoMensaje = this.get('store').createRecord('mensaje', {
                contenido: mensaje,
                fecha: new Date()
            });

            // Recupera el autor del Store
            let autorMensaje = this.get('store').peekRecord('usuario', this.get('sesion').get('uid'));
            nuevoMensaje.set('emisor', autorMensaje);

            nuevoMensaje.set('chat', this.get('model'));
            this.get('model').get('mensajes').pushObject(nuevoMensaje);
            this.get('model').save().then(() => {
                nuevoMensaje.save().then(() => {
                    this.set('contenidoMensaje', '');
                });
            });
        },

        cerrar() {
            this.get('model').set('estado', 'finalizado')
            this.get('model').save().then(() => {
                this.transitionToRoute('sesion.usuario', this.get('sesion').get('uid'));
            });
        }
    }
});
