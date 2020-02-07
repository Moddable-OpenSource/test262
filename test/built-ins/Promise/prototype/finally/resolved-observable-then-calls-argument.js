// Copyright (C) 2019 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-thenfinallyfunctions
description: >
  valueThunk is anonymous built-in function with length of 1 that returns value.
info: |
  Then Finally Functions

  ...
  8. Let valueThunk be equivalent to a function that returns value.
  9. Return ? Invoke(promise, "then", « valueThunk »).

  The "length" property of a Then Finally function is 1.
features: [Promise.prototype.finally, Reflect.construct]
includes: [isConstructor.js]
flags: [async]
---*/

var value = {};

Promise.resolve(value)
  .finally(function() {})
  .then(() => $DONE(), $DONE);

var calls = 0;
var expected = [
  { length: 0, name: '' },
  { length: 1, name: '' }
];

var then = Promise.prototype.then;
Promise.prototype.then = function(resolve) {
  assert(!isConstructor(resolve));
  assert.sameValue(resolve.length, expected[calls].length);
  assert.sameValue(resolve.name, expected[calls].name);
  if (calls === 0) {
    assert.sameValue(resolve(), value);
  }
  calls += 1;
  return then.call(this, resolve);
};
