import React from 'react'
import Message from './Message'
import {connect} from 'react-redux'
import AddMess from '../containers/AddMess'

 class MessageBox extends React.Component{
    render(){
        return(
            <div>
            <ul>
                {this.props.messages.map(message=>
                <Message key={message.id}
                {...message}/>)}
            </ul>
            <h3> MessageBox diag id is {this.props.DialogID} </h3>
            <AddMess DialogID={this.props.DialogID}/>
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
