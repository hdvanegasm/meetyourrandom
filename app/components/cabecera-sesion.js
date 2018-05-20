import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  sesion: service("session"),
  router: service(),
  actions: {
    cerrarSesion() {
      this.set("cargando", true);
      this.get("sesion")
        .close()
        .then(() => {
          this.set("cargando", false);
          this.get('router').transitionTo("interfaz-principal");
        });
    }
  }
});
