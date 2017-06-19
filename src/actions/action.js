import counterMessages from '../helpers/counters'


export const sendMessage = (text,diagId)=>{
    return {
        type:'SEND_MESSAGE',
        id:counterMessages(2),
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

