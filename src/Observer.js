System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var empty;
    return {
        setters:[],
        execute: function() {
            exports_1("empty", empty = {
                isUnsubscribed: true,
                next(value) { },
                error(err) { throw err; },
                complete() { }
            });
        }
    }
});
