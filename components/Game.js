import "styles/components/game.scss";
import React from 'react';
import AppStore from 'stores/AppStore';
import AppActions from 'actions/AppActions';
// randomize array of images

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = AppStore.gameState;
    }

    componentDidMount() {
        AppStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
      AppStore.removeChangeListener(this._onChange.bind(this));
    }

    showImage(i){
        if (this.state.guess > 0 && this.state.flippedImage.id !== this.state.images[i].id) {
            let images = this.state.images;
            images[i].visible = true;
            this.setState({images: images, guess: 0});
            setTimeout(()=> {
                images[this.state.flippedImage.index].visible = false;
                images[i].visible = false;
                this.setState({images: images, guess: 0, flippedImage: {index: -1, id: -1}})

            }, 1000);
        }

        else if (this.state.guess === 0) {
            let images = this.state.images;
            images[i].visible = true;
            this.setState({
                guess: ++this.state.guess,
                flippedImage: { id: this.state.images[i].id, index: i }
            });

        }
        else if (this.state.flippedImage.index !== i){
            let images = this.state.images;
            images[i].visible = true;
            this.setState({
                guess: 0,
                flippedImage: -1
            });
        }
    }

    _onChange(){
        this.setState(AppStore.gameState);
    }

    render(){
        let list = [];
        for (let i = 0; i<16; i++) {
            list.push(<li key={i} onClick={this.showImage.bind(this,i)}>
                        <img src={this.state.images[i].src} style={{display: this.state.images[i].visible ? "block" : "none"}}/>
                    </li>);
        }
        return <div className="game">
                    <div className="game__caption">
                        <ol>
                            {list}
                        </ol>
                    </div>
                    <div>
                    </div>
                </div>;
    }
}

export default Game;
