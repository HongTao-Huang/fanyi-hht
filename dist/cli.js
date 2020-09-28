#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var index_1 = require("./index");
var program = new commander_1.Command();
program
    .version('0.0.1')
    .name('htfy')
    .usage('<word>')
    .arguments('<word>')
    .action(function (word) {
    index_1.translate(word);
});
program.parse(process.argv);
