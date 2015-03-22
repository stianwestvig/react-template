var React = require('react');

var MyView = React.createClass({
    render: function(){
        return (
            <div>
                <p>simplest view.</p>
            </div>
        );
    }
});

function render() {
    return <MyView />;
}
module.exports = render;
