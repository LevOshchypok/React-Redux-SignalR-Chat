const dialogues = (state={}, action)=>{
    switch(action.type){
        case 'GET_CURRENT_DIAG_ID':
        return [
            ...state,
            state.currentDiagId = action.id
        ]

        default:
        return state;
    }
}

export default dialogues