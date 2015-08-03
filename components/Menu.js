import "styles/components/menu.scss";
import React from "react";
import AppActions from 'actions/AppActions';

class Menu extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false
        };
    }

    startNewGame(e) {
        e.preventDefault();
        AppActions.newGame();
    }

    toggleMenu(){
        this.setState({active: !this.state.active})
    }

    render(){
        return <div className="menu">
                    <div className="material-menu">
                        <div className={`material-btn ${this.state.active ? 'active' : ''}`} onClick={this.toggleMenu.bind(this)}>
                            <div className={`material-hamburger ${this.state.active ? 'material-close' : ''}`} >
                                <div className="material-patty"></div>
                                <div className="material-patty"></div>
                                <div className="material-patty"></div>
                            </div>
                        </div>
                        <div className="material-content">
                            <nav>
                                <ul>
                                    <li className={`${this.state.active ? 'active' : ''}`} ><a href="" onClick={this.startNewGame.bind(this)}>NewGame</a></li>
                                    <li className={`${this.state.active ? 'active' : ''}`}><a href="">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>;
    }
}

export default Menu;