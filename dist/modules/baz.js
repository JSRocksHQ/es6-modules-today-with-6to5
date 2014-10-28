"use strict";
var print = function (what) {
    return '[from print module]' + what;
}

exports.default = print;