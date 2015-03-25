var SampleActionCreators = require('../actions/SampleActionCreators');
var SampleConstants  = require('../constants/SampleConstants');


module.exports = {
    getAllSamples: function(){
        $.get(SampleConstants.APIEndpoints.SAMPLE_GET)
            .done(function(data) {
                SampleActionCreators.receiveAll(data);
            });
    }
};