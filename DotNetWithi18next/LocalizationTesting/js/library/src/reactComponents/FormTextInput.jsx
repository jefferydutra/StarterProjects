var React = require('React');

var FormTextInput = React.createClass({
    render: function(){
        return (
            <div className="form-group">
                <label htmlFor={this.props.key}>
                    {this.props.label}
                </label>
                <input
                    type="text"
                    className="form-control"
                    id={this.props.key}
                    value={this.props.value} onChange={this.props.onValueChange} />
            </div>
        );
    }
});

function getFormGoupBasedOnValidInput( isValid ){
    return isValid
        ? 'form-group'
        : 'form-group has-error has-feedback';
}

function getScreenReaderValidationStatus( name, isValid ){
    var id = name + 'inputStatus';
    var message = isValid ? 'success' : 'error';
    return (
        <span
            id={id}
            className="sr-only">
                ({message})
        </span>
    )
}

function getErrorMessage ( isValid, errorMessage){
    return isValid
            ? null
            : ' (' + errorMessage + ')';
}
var FormTextInputWithValidation = React.createClass({
    render: function(){
        var isValid = this.props.isValid();
        var textType = this.props.textType ? this.props.textType : 'text';
        var formGroup = getFormGoupBasedOnValidInput( isValid );
        var notValidMessage = getErrorMessage( isValid, this.props.errorMessage );
        var warningStatus = getScreenReaderValidationStatus( this.props.key, isValid );
        return (
            <div className={formGroup}>
                <label
                    className="control-label"
                    htmlFor={this.props.key}
                    aria-describedby="inputWarningStatus">
                    {this.props.label} {notValidMessage}
                </label>
                <input
                    type={textType}
                    className="form-control"
                    id={this.props.key}
                    name={this.props.key}
                    value={this.props.value}
                    onChange={this.props.onValueChange} />
                {warningStatus}
            </div>
        );
    }
});

module.exports = {
    BaseInput: FormTextInput,
    WithValidation: FormTextInputWithValidation
};