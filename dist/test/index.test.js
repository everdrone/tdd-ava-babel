'use strict';

require('babel-polyfill');

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// test.beforeEach('setup test environment', t => {});
// test.afterEach.always('cleanup', t => {});

/**
 * needed only at the entry point of babel source code
 */
(0, _ava2.default)('test name', function (t) {
  t.pass();
});
/**
 * configure ava in package.json
 * current config:
 * --fail-fast
 * --serial
 * --verbose
 */