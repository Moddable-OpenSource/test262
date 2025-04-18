// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: setFromBase64 throws if buffer is immutable
esid: sec-uint8array.prototype.setfrombase64
features: [uint8array-base64, TypedArray, immutable-arraybuffer]
---*/

var buffer = new ArrayBuffer(3);
var target = new Uint8Array(buffer.transferToImmutable());
assert.throws(TypeError, function() {
  target.setFromBase64('Zg==');
});
