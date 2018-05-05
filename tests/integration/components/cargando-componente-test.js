import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cargando-componente', 'Integration | Component | cargando componente', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cargando-componente}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#cargando-componente}}
      template block text
    {{/cargando-componente}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
