import React from 'react'
import Message from './Message'
import {connect} from 'react-redux'

 class MessageBox extends React.Component{
    render(){
        return(
            <ul>
                {this.props.messages.map(message=>
                <Message key={message.id}
                {...message}/>)}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return{
        messages: state.messages
    };
}

export default connect(mapStateToProps)(MessageBox)


