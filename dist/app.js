"use strict";
var foo = require("./modules/foo").default;
var bar = require("./modules/bar").default;

console.log('From module foo >>> ', foo);
console.log('From module bar >>> ', bar);