import counterMessages from '../helpers/counters'


export const sendMessage = (text,diagId)=>{
    return {
        type:'SEND_MESSAGE',
        id:counterMessages(),
        dialogID:diagId,
        text
    }
}

export const recieveMessage = (text)=>{
    return{
        type:'RECEIVE_MESSAGE',
        text
    }
}

export const getCurrendDialog = (id)=>{
    return{
        type:'GET_CURRENT_DIAG_ID',
        id
    }
}

export const addDialogue = (name)=>{
    return{
        type:'ADD_DIALOGUE',
        id:counterMessages(),
        name,
    }
}

export const removeDialogue = (name)=>{
    return{
        type:'REMOVE_DIALOGUE',
        name
    }
}