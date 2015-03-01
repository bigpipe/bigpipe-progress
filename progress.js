'use strict';

/**
 * Programmatically control a progress bar.
 *
 * @constructor
 * @param {Element} element DOM element we should render.
 * @param {Object} options
 * @api public
 */
function Progress(element) {
  if (!(this instanceof Progress)) return new Progress(element);

  this.parent = element;
  this.bar = this.parent.firstChild;

  this.set(0);
}

/**
 * Set a new percentage that the progress bar should have.
 *
 * @param {Number} amount The percentage of the progress bar.
 * @returns {Progress}
 * @api public
 */
Progress.prototype.set = function set(amount) {
  if (amount > 100) amount = 100;
  if (amount < 0) amount = 0;

  if ('value' in this.bar) this.bar.value = amount;
  else this.bar.style.width = amount +'%';

  this.parent.style.opacity = 100 === amount || 0 === amount ? 0 : 1;
  return this;
};

//
// Expose the Progress constructor.
//
module.exports = Progress;
