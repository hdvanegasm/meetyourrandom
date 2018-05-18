import { helper } from '@ember/component/helper';

export function estadoChat([estadoActual, comparacion]) {
  return estadoActual == comparacion;
}

export default helper(estadoChat);
