'use strict';

var React = require('react');

var HelloMessage = React.createClass({
    propTypes: {
        name: React.PropTypes.string,
        number: React.PropTypes.number.isRequired
    },
    render: function () {
        var name = this.props.name;
        var age = this.props.number;
        return (
            <div>
                <p>Hello thare {name}. You are {age} years old.</p>
            </div>
        );
    }
});

function render() {
    return <HelloMessage name="Developer" number={28} />;
}
module.exports = render;
