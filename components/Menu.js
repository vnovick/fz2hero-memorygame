require("styles/components/menu.scss");
var React = require('react');

var Menu = React.createClass({displayName: "Menu",
    render: function () {
        return (
            React.createElement("div", {className: "menu"},
                React.createElement("div", {className: "material-menu"},
                    React.createElement("div", {className: "material-btn", onclick: this.toggleButton},
                        React.createElement("div", {className: "material-hamburger"},
                            React.createElement("div", {className: "material-patty"}),
                            React.createElement("div", {className: "material-patty"}),
                            React.createElement("div", {className: "material-patty"})
                        )
                    ),
                    React.createElement("div", {className: "material-content"},
                        React.createElement("nav", null,
                            React.createElement("ul", null,
                                React.createElement("li", null, React.createElement("a", {href: ""}, "New Game")),
                                React.createElement("li", null, React.createElement("a", {href: ""}, "Score")),
                                React.createElement("li", null, React.createElement("a", {href: ""}, "Contact"))
                            )
                        )
                    )
                )
            )
        );
    }
});

module.exports = Menu;
