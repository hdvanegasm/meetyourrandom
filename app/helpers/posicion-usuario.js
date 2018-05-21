import { helper } from "@ember/component/helper";

export function posicionUsuario([usuarioActivo, usuarioEmisor]) {
  if (usuarioActivo === usuarioEmisor) {
    return "right";
  } else {
    return "left";
  }
}

export default helper(posicionUsuario);
