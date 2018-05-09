/**
 * needed only at the entry point of babel source code
 */
import 'babel-polyfill';
/**
 * configure ava in package.json
 * current config:
 * --fail-fast
 * --serial
 * --verbose
 */
import test from 'ava';

// test.beforeEach('setup test environment', t => {});
// test.afterEach.always('cleanup', t => {});

test('test name', t => {
  t.pass();
});
