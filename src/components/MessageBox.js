import React from 'react'
import Message from './Message'
import {connect} from 'react-redux'
import AddMess from '../containers/AddMess'

 class MessageBox extends React.Component{
    render(){
        return(
            <div id="messageBox">
            <div id="messageBox-messages">
                {this.props.messages.map(message=>
                <Message key={message.id}
                {...message}/>)}
            </div>
            <h3> MessageBox diag id is {this.props.DialogID} </h3>
            <AddMess UpadatesTrigger={this.props.UpadatesTrigger} DialogID={this.props.DialogID}/>
            </div>
        )
    }
}

// function mapStateToProps(state){
//     return{
//         messages: state.messages
//     };
// }

// export default connect(mapStateToProps)(MessageBox)

export default MessageBox
