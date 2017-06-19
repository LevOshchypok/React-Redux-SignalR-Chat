import {fromJS} from 'immutable';

const messages = (state={}, action)=>{
    switch(action.type){
        case 'SEND_MESSAGE':
        var UpdatedState = Object.assign({}, state);
        UpdatedState.dialogues.filter(x=>x.id == action.dialogID)[0].messages.push({id:action.id, text:action.text});
        return UpdatedState;

        default:
        return state;
    }
}

export default messages