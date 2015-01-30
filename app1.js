#!/usr/bin/env node
/**
 * Created by andrew on 29.01.15.
 */
"use strict";

//var test_begin = require('./tests/test.js');


var Spooky = require('spooky');
var fs = require('fs');
var pth = require('path');

var spooky = [];

"use strict";

spooky = new Spooky({
    child: {
        transport: 'http'
    },
    casper: {
        logLevel: 'debug',
        verbose: true
    }
}, function (err) {
    if (err) {
        e = new Error('Failed to initialize SpookyJS');
        e.details = err;
        throw e;
    }

    spooky.start();
    addWebsiteStep('si2_job@mail', 'localhost');
    spooky.run();
});

spooky.on('error', function (e, stack) {
    console.error(e);

    if (stack) {
        console.log(stack);
    }
});

spooky.on('log', function (log) {
    if (log.space === 'remote') {
        console.log(log.message.replace(/ \- .*/, ''));
    }
});

function addWebsiteStep(email, website) {

     var dir = 'tests';
     var self = this;
     //fs = new fs();
     if (fs.lstatSync(dir).isDirectory()) {
     console.log("test");
     }

     fs.readdir(dir, function (err, files) {
     if (err) {
     throw err;
     }

     files.map(function (file) {
     return pth.join(dir, file);
     }).filter(function (file) {
     return fs.statSync(file).isFile();
     }).forEach(function (file) {
     console.log("%s (%s)", file, pth.extname(file));
     });
     });
    return false;
};

