var React = require('react');

var Header = React.createClass({
    render: function () {
        return (
            React.createElement("div", {className: "header"},
            React.createElement("div", {className: "header__title"},
                React.createElement("h1", {className: "header__title__caption"}, this.props.caption)
            ))
        );
    }
});

module.exports = Header;
