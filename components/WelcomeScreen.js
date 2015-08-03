var React = require("react");

var WelcomeScreen = React.createClass({displayName: "WelcomeScreen",
    render: function() {
        return (
            React.createElement("div", {className: "welcomeScreen"},
                React.createElement("div", {className: "welcomeScreen__content", onClick: this.props.clickHandler},
                    React.createElement("h1", {className: "welcomeScreen__header"}, this.props.caption),
                    React.createElement("img", {className: "welcomeScreen__logo", src: "assets/images/logo.png" }),
                    React.createElement("div", {className: "welcomeScreen__logo--flipped" }),
                    React.createElement("a", {className: "welcomeScreen__copyright", href: "sdfsd"}, "Vladimir Novick")
                )

            )
        );
    }
});

module.exports = WelcomeScreen;

