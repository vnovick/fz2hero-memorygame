require("styles/app.scss")
import React from 'react';
import WelcomeScreen from 'components/WelcomeScreen';
import Header from 'components/Header';
import Menu from 'components/Menu';
import Game from 'components/Game';
import AppActions from 'actions/AppActions';
import AppStore from 'stores/AppStore';

function getAppState(){
    return {welcome: AppStore.welcomeState };
}
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = getAppState();
    }

    _onChange() {
        this.setState(getAppState());
    }

    componentDidMount() {
        AppStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
     AppStore.removeChangeListener(this._onChange.bind(this));
    }

    handleWelcomeClick(){
        AppActions.startApp();
        //this.setState({welcome: false})
    }

    getValidView(){

        return this.state.welcome ?
            <WelcomeScreen caption={this.props.name} clickHandler={this.handleWelcomeClick.bind(this)}/> :
            <div className="main-screen">
                <Header caption={`Welcome to ${this.props.name}`}/>
                <Menu/>
                <Game/>
            </div>;

    }

    render() {
        return (
            React.createElement("div", {className: "app"},
                this.getValidView()
            )
        );
    }
}

export default App;
