'use strict';

exports.name = 'progress';
exports.client = function client(bigpipe) {
  var Progress = require('./progress')
    , progress;

  //
  // Create the progress bar element and append that shit to the body element so
  // it's one of the first items in the DOM.
  //
  var wrapper = document.createElement('div')
    , bar = document.createElement('div')
    , remaining = bigpipe.expected
    , body = document.body;

  bar.className = 'bar';
  wrapper.className = 'progressive';

  wrapper.appendChild(bar);
  body.insertBefore(wrapper, body.firstChild);

  progress = new Progress(wrapper);

  bigpipe.on('arrive', function arrive(name, data) {
    bigpipe.once(name +':initialized', function initialized() {
      remaining--;

      progress.set(Math.round(((bigpipe.expected - remaining) / bigpipe.expected) * 100));
    });
  });
};
