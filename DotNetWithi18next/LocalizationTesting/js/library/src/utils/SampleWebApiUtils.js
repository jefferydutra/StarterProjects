var SampleActionCreators = require('../actions/SampleActionCreators');
var SampleConstants  = require('../constants/SampleConstants');
var $ = require('jQuery');


module.exports = {
    getAllSamples: function(){
        $.get(SampleConstants.APIEndpoints.SAMPLE_GET)
            .done(function(data) {
                SampleActionCreators.receiveAll(data);
            });
    }
};