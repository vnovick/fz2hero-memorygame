require("styles/components/header.scss");
var React = require('react');

var Header = React.createClass({
    render: function () {
        //return (
        //    React.createElement("div", {className: "header"},
        //    React.createElement("div", {className: "header__title"},
        //        React.createElement("h1", {className: "header__title__caption"}, this.props.caption)
        //    ))
        //);
        return  <div className="header">
                    <div className="header__title">
                        <h1 className="header__title__caption">
                            {this.props.caption}
                        </h1>
                    </div>
                </div>;
    }
});

module.exports = Header;
