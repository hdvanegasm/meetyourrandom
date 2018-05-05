import Controller from '@ember/controller';
import { inject as Service } from '@ember/service';

export default Controller.extend({

    session: Service('session'),
    actions: {
        iniciarSesion: function (provider) {
            let self = this;
            if (self.get('email') === undefined || self.get('email') === '') {
                alert('el campo de email esta vacío');
                return;
            }
            if (self.get('password') === undefined || self.get('password') === '') {
                alert('el campo de la contraseña esta vacío');
                return;
            }

            this.get('session').open('firebase', {
                provider: provider,
                email: self.get('email'),
                password: self.get('password')
            })
                .then(function () {
                    document.getElementById('cargando').innerHTML = 'cargando';
                    self.get('store').query('usuario', {
                        orderBy: 'email',
                        equalTo: self.get('email')
                    }).then(function (users) {
                        let id = users.get('firstObject');
                        document.getElementById('cargando').innerHTML = '';
                        self.transitionToRoute('sesion.usuario', id);
                    })
                }).catch(function (error) {
                    if (error.code === 'auth/user-not-found' ||
                        error.code === 'auth/wrong-password' || error.code === 'auth/invalid-email'
                        || error.code === 'auth/wrong-password') {

                        alert('Usuario o la contraseña son inválidos');
                    }
                });
        },
        cerrarSesion: function () {
            this.get('session').close();
        }
    }

});
