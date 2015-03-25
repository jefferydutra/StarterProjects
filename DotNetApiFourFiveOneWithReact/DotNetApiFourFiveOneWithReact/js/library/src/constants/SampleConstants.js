var keyMirror = require('keymirror');

var APIRoot = webApiRootUrl; // jshint ignore:line

module.exports = {
    APIEndpoints: {
        SAMPLE_GET:  APIRoot + "Sample"
    },
    ActionTypes: keyMirror({
        RECEIVE_RAW_SAMPLES: null
    })
};
