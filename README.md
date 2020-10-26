# bigpipe-progress

[![Version npm][version]](http://browsenpm.org/package/bigpipe-progress)[![Build Status][build]](https://travis-ci.org/bigpipe/bigpipe-progress)[![Dependencies][david]](https://david-dm.org/bigpipe/bigpipe-progress)[![Coverage Status][cover]](https://coveralls.io/r/bigpipe/bigpipe-progress?branch=master)

[version]: http://img.shields.io/npm/v/bigpipe-progress.svg?style=flat-square
[build]: http://img.shields.io/travis/bigpipe/bigpipe-progress/master.svg?style=flat-square
[david]: https://img.shields.io/david/bigpipe/bigpipe-progress.svg?style=flat-square
[cover]: http://img.shields.io/coveralls/bigpipe/bigpipe-progress/master.svg?style=flat-square

This module adds a small progress bar in to the page will increment each time
a pagelet on your page is fully loaded (all the CSS and JS).

## Installation

The module is released in the public npm registry and can be installed by
running:

```bash
npm install --save bigpipe-progress
```

In your terminal. The `--save` flag tells `npm` to automatically add the
installed version to your `package.json`

## Usage

As this is a plugin for the `bigpipe` framework it can be loaded using the
`bigpipe.use` method as show in the example below:

```js
var BigPipe = require('bigpipe');
var bigpipe = BigPipe.createServer({
  port: 8080
});

//
// We can require the module directly and pass it in bigpipe's use method.
//
bigpipe.use('progress', require('bigpipe-progress'));
```

And that all you need to load in the plugin. Now, the plugin that we load in the
page is un-styled but has some special classes that can be used for styling
purposes.

We also have an example CSS file in the root of this repository if you want to
have some design inspiration. The following class names are set:

- `.progressive` This className is applies to the parent `div` element of the
  progress bar.
- `.bar` The div within the `.progressive` element who's `width` style attribute
  is increased.

When the progress bar reaches 100% we automatically hide the progress bar.

## License

MIT
