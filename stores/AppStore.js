import AppDispatcher from 'core/AppDispatcher';
import AppConstants from 'constants/AppConstants';
import { EventEmitter } from 'events';

let CHANGE_EVENT = 'change';

class AppStore extends EventEmitter {

    constructor(props){
        super(props);
        this.welcomeState = true;
        this.gameState = this.newGame();
        this.guess = 0;
        this.score = 0;
        this.flippedImage =
        AppDispatcher.register((payload)=> {
            var action = payload.action;
            switch(action.actionType) {
                case AppConstants.NEW_GAME:
                    let state = appStore.newGame();
                    appStore.gameState = state;
                    appStore.emitChange();
                    break;

                case AppConstants.START:
                    appStore.welcomeState = false;
                    appStore.emitChange();
                    break;
                case AppConstants.UPDATE_SCORE:
                    appStore.score = appStore.score + 1;
                    appStore.emitChange();
                    break;
                // add more cases for other actionTypes, like TODO_UPDATE, etc.
            }

            return true; // No errors. Needed by promise in Dispatcher.
        });
    }

    newGame(){
        return {
            images: this.generateImages(),
            guess: 0,
            flippedImage: {
                index: -1,
                id: -1
            }
        };
    }

    getScore(){
        return {score: this.score };
    }

    get score(){
        return this.gameScore;
    }

    set score(score){
        this.gameScore = score;
    }

    generateImages(){
        let images = []
        for (let i = 0; i<8; i++){
            let rand = Math.floor(Math.random() * (331));
            let img = 'assets/images/teams/image_' + rand + '.png';
            let _img = (new Image()).src = img;
            images.push({ src: img, visible: false, id: rand });
            images.push({ src: img, visible: false, id: rand });
        }
        return this.randomizeImages(images);
    }

    randomizeImages(img){
        let images = img;
        let i = images.length, j, temp;
        while ( --i )
        {
            j = Math.floor( Math.random() * (i - 1) );
            temp = images[i];
            images[i] = images[j];
            images[j] = temp;
        }
        return images;
    }

    get gameState(){
        return this._gameState;
    }
    set gameState(obj){
        this._gameState = obj;
    }


    get welcomeState(){
        return this.welcome;
    }
    set welcomeState(bool){
        this.welcome = bool;
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}


let appStore = new AppStore();

export default appStore