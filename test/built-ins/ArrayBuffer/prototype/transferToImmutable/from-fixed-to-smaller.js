// Copyright (C) 2024-2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
features: [resizable-arraybuffer, immutable-arraybuffer]
---*/

var source = new ArrayBuffer(4);

var sourceArray = new Uint8Array(source);
sourceArray[0] = 1;
sourceArray[1] = 2;
sourceArray[2] = 3;
sourceArray[3] = 4;

var dest = source.transferToImmutable(3);

assert.sameValue(source.byteLength, 0, 'source.byteLength');
assert.sameValue(source.detached, true, 'source.byteLength');

assert.sameValue(dest.immutable, true, 'dest.immutable');
assert.sameValue(dest.resizable, false, 'dest.resizable');
assert.sameValue(dest.byteLength, 3, 'dest.byteLength');
assert.sameValue(dest.maxByteLength, 3, 'dest.maxByteLength');

var destArray = new Uint8Array(dest);

assert.sameValue(destArray[0], 1, 'destArray[0]');
assert.sameValue(destArray[1], 2, 'destArray[1]');
assert.sameValue(destArray[2], 3, 'destArray[2]');
