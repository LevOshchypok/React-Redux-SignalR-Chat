import {fromJS} from 'immutable';



const messages = (state={}, action)=>{
    switch(action.type){
        case 'SEND_MESSAGE':
        console.log("The state");
        console.log(state);
        var UpdatedState = Object.assign({}, state);
        console.log("Upd staet" );
        console.log(UpdatedState);
        UpdatedState.dialogues.filter(x=>x.id == action.dialogID)[0].messages.push({id:action.id, text:action.text});
        return UpdatedState;

        default:
        return state;
    }
}



export default messages

