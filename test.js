describe('plugin', function () {
  'use strict';

  var Progress = require('./progress')
    , assume = require('assume')
    , plugin = require('./');

  describe('Progress', function () {
    var element;

    beforeEach(function () {
      element = {
        style: {},
        firstChild: {
          value: 0,
          style: {}
        }
      };
    });

    it('is exported as function', function () {
      assume(Progress).is.a('function');
    });

    it('can be initialized without new', function () {
      assume(Progress(element)).is.instanceOf(Progress);
    });

    it('hides the progress element by default', function () {
      var progress = new Progress(element);

      assume(element.style.opacity).equals(0);
    });

    describe('#set', function () {
      it('hides the progress bar when an amount == 0 || 100 is set', function () {
        var progress = new Progress(element);

        assume(element.style.opacity).equals(0);
        progress.set(10);
        assume(element.style.opacity).equals(1);
        progress.set(0);
        assume(element.style.opacity).equals(0);
        progress.set(40);
        assume(element.style.opacity).equals(1);
        progress.set(100);
        assume(element.style.opacity).equals(0);
      });
    });

    it('normalizes values below 0 or above 100', function () {
      var progress = new Progress(element);

      progress.set(10);
      assume(element.firstChild.value).equals(10);
      progress.set(-10);
      assume(element.firstChild.value).equals(0);
      progress.set(10);
      assume(element.firstChild.value).equals(10);
      progress.set(101);
      assume(element.firstChild.value).equals(100);
    });

    it('sets the style if no value attribute is found', function () {
      delete element.firstChild.value;

      var progress = new Progress(element);

      progress.set(10);
      assume(element.firstChild.style.width).equals('10%');
      progress.set(-10);
      assume(element.firstChild.style.width).equals('0%');
      progress.set(10);
      assume(element.firstChild.style.width).equals('10%');
      progress.set(19);
      assume(element.firstChild.style.width).equals('19%');
    });
  });
});
