module.exports = {
    numberGreaterThanOrEqualTo: function( value, testValue ){
        if(isNaN(value)){
            return false;
        }
        if(isNaN(testValue)){
            return true;
        }

        return Number(value) >= Number(testValue);
    }
};