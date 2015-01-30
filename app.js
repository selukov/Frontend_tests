#!/usr/bin/env node
/**
 * Created by andrew on 29.01.15.
 */
//"use strict";

var test_begin = require('./tests/test_begin.js');

var Spooky  = test_begin();

Spooky.run('http://www.bbc.co.uk/russian');