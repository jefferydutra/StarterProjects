﻿var dest = "./dist/src";
var src = './js/library/src';

module.exports = {
    browserify: {
        // Enable source maps
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: src + '/reactComponents/App.jsx',
            dest: dest,
            outputName: 'app.js'
        }]
    }
};