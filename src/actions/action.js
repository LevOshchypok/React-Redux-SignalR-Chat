let counter=3;

export const sendMessage = (text)=>{
    return {
        type:'SEND_MESSAGE',
        id:++counter,
        text
    }
}

export const recieveMessage = (text)=>{
    return{
        type:'RECEIVE_MESSAGE',
        text
    }
}

