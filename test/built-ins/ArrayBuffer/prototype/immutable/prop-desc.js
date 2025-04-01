// Copyright (C) 2024-2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
includes: [propertyHelper.js]
features: [ArrayBuffer, immutable-arraybuffer]
---*/

var desc = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'immutable');

assert.sameValue(desc.set, undefined);
assert.sameValue(typeof desc.get, 'function');

verifyProperty(ArrayBuffer.prototype, 'immutable', {
  enumerable: false,
  configurable: true
});
