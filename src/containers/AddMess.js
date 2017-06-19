import React from 'react';
import {connect} from 'react-redux';
import {sendMessage} from '../actions/action'


class AddMess extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={message:''}

        this.state = {diagID:0}

        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    componentWillMount(){
            this.setState({diagID:this.props.DialogID})
            console.log("I am in will mount");
            console.log("This state id " + this.state.diagID);
    }

    handleMessageChange(e){
        this.setState({message:e.target.value});
        this.setState({diagID:this.props.DialogID})
            console.log("I am in will mount");
            console.log("This state id " + this.state.diagID);
    }
     
    sendMessage(){
        console.log("I am in the message ");
        console.log("mu id is " + this.state.diagID);
       this.props.sendMessage(this.state.message, this.state.diagID);
    }

    render(){
        return(
            <div id="addmessage">
                <form onSubmit={e=>{
                    e.preventDefault();
                    this.sendMessage();
                    this.setState({message:''});
                    }}>
                    <input type="text" value={this.state.message} onChange={this.handleMessageChange} ></input>
                    <button type="submit">summit</button>
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
