// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.14-2-18
description: >
    Array.prototype.indexOf applied to String object, which implements
    its own property get method
includes: [runTestCase.js]
---*/

function testcase() {
        var str = new String("012");
        try {
            String.prototype[3] = "3";
            return Array.prototype.indexOf.call(str, "2") === 2 &&
                Array.prototype.indexOf.call(str, "3") === -1;
        } finally {
            delete String.prototype[3];
        }
    }
runTestCase(testcase);
