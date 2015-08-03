require("styles/app.scss")
var React = require('react');
var WelcomeScreen = require('components/WelcomeScreen');
var Header = require('components/Header');
var Menu = require('components/Menu');
var Game = require('components/Game');

var App = React.createClass({displayName: "App",
    getInitialState: function(){
        return {
            welcome: true
        };
    },
    handleWelcomeClick: function(){
        this.setState({welcome: false})
    },
    getValidView: function(){
        return this.state.welcome ?
            React.createElement(WelcomeScreen, {caption: this.props.name, clickHandler: this.handleWelcomeClick}) :
            React.createElement("div", {className: "main-screen"},
                React.createElement(Header,{caption: "Welcome to " + this.props.name}),
                React.createElement(Menu, null),
                React.createElement(Game, null)
            );
    },
    render: function () {
        return (
            React.createElement("div", {className: "app"},
                this.getValidView()
            )
        );
    }
});

module.exports = App;
