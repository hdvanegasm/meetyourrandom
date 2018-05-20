import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cabecera-sesion', 'Integration | Component | cabecera sesion', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cabecera-sesion}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#cabecera-sesion}}
      template block text
    {{/cabecera-sesion}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
