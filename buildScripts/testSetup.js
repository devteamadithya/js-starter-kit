// This file isn't transpiled. so must use CommonJS and es5

//register babel to transpile brfore run it in test

require('babel-register') ();

//disable webpack feature that Mocha doesn't understand.

require.extensions['css'] = function(){};
