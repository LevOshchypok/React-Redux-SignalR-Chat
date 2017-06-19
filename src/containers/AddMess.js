import React from 'react';
import {connect} from 'react-redux';
import {sendMessage} from '../actions/action'


class AddMess extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={message:''}
        

        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }


    handleMessageChange(e){
        this.setState({message:e.target.value});
    }
     
    sendMessage(e){
         e.preventDefault();
         this.props.sendMessage(this.state.message, this.props.DialogID);
         this.props.UpadatesTrigger();
         this.setState({message:''});
    }

    render(){
        return(
            <div id="addmessage">
                <form onSubmit={this.sendMessage}>
                    <input type="text" value={this.state.message} onChange={this.handleMessageChange} ></input>
                    <button type="submit">sent</button>
                    <h1>This dialog id is - {this.props.DialogID}</h1>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>({sendMessage: (text, diagID)=>{
    dispatch(sendMessage(text,diagID));
},
})



export default connect(null, mapDispatchToProps)(AddMess)
