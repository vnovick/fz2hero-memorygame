var AppDispatcher = require('core/AppDispatcher');
var AppConstants = require('constants/AppConstants');

let AppActions = {
    newGame: (item) => {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.NEW_GAME,
            item: item
        });
    },
    startApp: () =>{
        AppDispatcher.handleViewAction({
           actionType: AppConstants.START
        });
    }
};

export default AppActions;