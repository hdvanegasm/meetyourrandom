# meetyourrandom

El director de un start up pretende crear una aplicación web que permita la interacción entre personas incluyendo un factor aleatorio a la hora de definir la interacción. El principio básico del software es emparejar personas y habilitar un chat entre ellas; dicho emparejamiento se realiza con base a las preferencias de cada persona involucrada.

El actor principal del sistema es el usuario, el cual tiene como información básica los siguientes datos: un email, contraseña, la fecha de nacimiento, nombre, género, ubicación (descrito de la forma pais-provincia-ciudad), ocupación, una biografía y tendrá asociada una foto de perfil.

Ahora, con el objetivo de realizar el emparejamiento de acuerdo a las preferencias, cada usuario tendrá asociados dos datos adicionales: rango de edad preferido y género preferido.

Cada usuario podrá registrarse en la aplicación web ingresando a la interfaz de registro y allí el usuario llenará un formulario donde deberá ingresar los siguientes campos: email, contraseña, confirmación de contraseña, fecha de nacimiento, nombre, género, ubicación, ocupación, biografía, rango de edad preferido, género preferido y una foto la cual actuará como foto de perfil.

Cuando un usuario inicia sesión en la aplicación web, deberá hacer un proceso de login. Allí el usuario podrá realizar tres acciones: modificar su perfil (en el cual puede modificar toda la información descrita en el párrafo anterior), realizar un emparejamiento (y dicho proceso se iniciará mediante un botón), habilitar un chat con alguno de los usuarios presente en la lista de favoritos, o eliminar algún usuario de esta lista.

Cuando un usuario opta por ser emparejado con alguien, el sistema tomará en cuenta sus preferencias y posteriormente habilitará un chat con otro usuario donde podrán intercambiar mensajes. Es importante aclarar que cada usuario estará dentro de los parámetros de preferencia de su correspondiente pareja. Adicionalmente, dentro del chat, los usuarios podrán agregar a su correspondiente pareja a la lista de favoritos; dicha adición será efectiva si y sólo si ambas partes del emparejamiento optan por realizar esta acción. Además, si el usuario no está a gusto con el chat actual, podrá cerrar la conversación actual y volver a la interfaz de su sesión.

Por otro lado, cuando un usuario acaba de iniciar sesión y quiere hablar con una persona dentro de su lista de favoritos, el usuario procede a hacer una solicitud de conexión; y en ese instante, la contraparte recibirá la solicitud donde decidirá si va a participar del chat; si la contraparte acepta la solicitud, entonces se abrirá una interfaz dedicada al chat donde ambos podrán compartir mensajes.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd meetyourrandom`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
