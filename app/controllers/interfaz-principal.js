import Controller from '@ember/controller';
import { inject as Service } from '@ember/service';

export default Controller.extend({
    cargando: false,
    session: Service('session'),
    actions: {
        iniciarSesion: function (provider) {
            let alerta = document.getElementById('alerta');
            let clickMe = document.getElementById('clickMe');
            let self = this;
            if (self.get('email') === undefined || self.get('email') === '') {
                alerta.innerHTML = 'El campo de email está vacío';
                clickMe.click();
            } else if (self.get('password') === undefined || self.get('password') === '') {
                alerta.innerHTML = 'El campo contraseña está vacío';
                clickMe.click();
            }

            this.get('session').open('firebase', {
                provider: provider,
                email: self.get('email'),
                password: self.get('password')
            })
                .then(function () {
                    self.set('cargando', true)
                    self.get('store').query('usuario', {
                        orderBy: 'email',
                        equalTo: self.get('email')
                    }).then(function (users) {
                        let id = users.get('firstObject');
                        self.set('cargando', false)
                        self.transitionToRoute('sesion.usuario', id);
                    })
                }).catch(function (error) {
                    if (error.code === 'auth/user-not-found' ||
                        error.code === 'auth/wrong-password' || error.code === 'auth/invalid-email'
                        || error.code === 'auth/wrong-password') {
                        alerta.innerHTML = 'Usuario o la contraseña son inválidos';
                        clickMe.click();
                    }
                });
        },
        cerrarSesion: function () {
            this.get('session').close();
        }
    }

});
