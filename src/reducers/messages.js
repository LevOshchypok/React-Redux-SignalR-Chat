const messages = (state={}, action)=>{
    switch(action.type){
        case 'SEND_MESSAGE':
        var UpdatedState = [...state];
        UpdatedState.messages=[...state.messages, {text:action.text } ];
        console.log("I am in message reducer");
        console.log(UpdatedState);
        return UpdatedState;

        default:
        return state;
    }
}

export default messages