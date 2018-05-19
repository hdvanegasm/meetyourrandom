import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { filter } from 'rsvp';

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
      this.get('store').findRecord('usuario', this.get('sesion').get('uid')).then((autorMensaje) => {
        nuevoMensaje.set('emisor', autorMensaje);

        nuevoMensaje.set('chat', this.get('model'));
        this.get('model').get('mensajes').pushObject(nuevoMensaje);
        this.get('model').save().then(() => {
          nuevoMensaje.save().then(() => {
            this.set('contenidoMensaje', '');
          });
        });
      });
    },

    cerrar() {
      this.get('model').set('estado', 'finalizado')
      this.get('model').save().then(() => {
        this.transitionToRoute('sesion.usuario', this.get('sesion').get('uid'));
      });
    },

    agregar() {
      this.get('store').findRecord('usuario', this.get('sesion').get('uid')).then( usuario => {
        this.get('model').get('favoritos').pushObject(usuario);
        this.get('model').save().then((chat) => {
          if(chat.get('favoritos').get('length') == 2) {

            //let userArray = this.get('model').get('usuarios').filter(usuario => usuario.get('id') != this.get('session').get('uid'));
            //console.log(usuario.get('listaFavoritos').get('usuarios'));
            //usuario.get('listaFavoritos').get('usuarios').pushObject(usuarioArray[0]);
            //usuario.save().then(() => {

            //})
          }
        });
      });
    }
  }
});
