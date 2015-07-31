require("styles/components/game.scss");
var React = require('react');

var Game = React.createClass({
    render: function () {
        return (
            React.createElement("div", {className: "game"},
            React.createElement("div",{className:"game__caption"}, "Here will be our new game")
            )
        );
    }
});


module.exports = Game;
