cordova.define("com.plugin.walinnshybrid", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'WalinnsHybridPlugin', 'coolMethod', [arg0]);
};

exports.trackEvent = function (arg0, success, error) {
    exec(success, error, 'WalinnsHybridPlugin', 'trackEvent', [arg0]);
};

exports.trackScreen = function (arg0, success, error) {
    exec(success, error, 'WalinnsHybridPlugin', 'trackScreen', [arg0]);
};

});
