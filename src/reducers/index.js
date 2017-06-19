import messages from './messages';
import dialogues from './dialogues';


const reducer = (state={}, action)=>{
    switch(action.type){
        case 'SEND_MESSAGE':
        console.log("The state");
        console.log(state);
        var UpdatedState = Object.assign({}, state);
        console.log("Upd staet" );
        console.log(UpdatedState);
        console.log('dialog id');
        console.log(action.dialogID);
        UpdatedState.dialogues.filter(x=>x.id == action.dialogID)[0].messages.push({id:action.id, text:action.text});
        return UpdatedState;

         




        //Dialogue reducers 
        case 'GET_CURRENT_DIAG_ID':
        return Object.assign({}, state, state.currentDiagId=action.id);

        case 'ADD_DIALOGUE':
        console.log("I am inside the reducer of adding dialogue");
        return Object.assign({},state, state.dialogues.push({id:action.id, name:action.name, messages:[]}))

        default:
        return state;
    }
}


export default reducer;