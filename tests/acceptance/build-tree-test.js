import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import groupsFixtures from '../fixtures/groups';
import Pretender from 'pretender';

var App;
var pretender;
module('Build tree object', {
  beforeEach(){
    App = startApp();
    pretender = new Pretender(function(){
      this.get('/groups', function(){
        return [
          200,
          {"Content-Type": "application/json"},
          JSON.stringify(groupsFixtures)
        ];
      });
    });
  },
  afterEach(){
    Ember.run(App, 'destroy');
    pretender = null;
  }
});


test("Build tree object from backend's json-api payload", function(assert) {
  assert.expect(1);

  visit('/');
  click('#build-tree');
  andThen(()=>{
    const actualObj = JSON.parse(find('p.tree').text().trim());
    assert.deepEqual(actualObj, {}, 'tree obj is correctly built');
  });
});
