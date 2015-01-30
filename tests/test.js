/**
 * Created by andrew on 30.01.15.
 */
var Spooky = require('spooky');
var EventEmitter = require('events').EventEmitter;
var md5 = require('MD5');
var dateFormat = require('dateformat');
var nconf = require('nconf');
nconf.file({file: '../config/setting.json'});


var captureImageFolder = nconf.get('capture:images');
var casperUserAgent = nconf.get('casper:userAgent');
var viewport = nconf.get('viewport');
var captureAsViewport = nconf.get('captureAsViewport');

var SpookyRunner = function() {

}

module.exports = SpookyRunner