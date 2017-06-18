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
     
    sendMessage(){
       this.props.sendMessage(this.state.message);
    }

    render(){
        return(
            <div>
                <form onSubmit={e=>{
                    e.preventDefault();
                    console.log("I am here");
                    this.sendMessage();
                    this.setState({message:''});
                    }}>
                    <input type="text" value={this.state.message} onChange={this.handleMessageChange} ></input>
                    <button type="submit">summit</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>({sendMessage: (text)=>{
    dispatch(sendMessage(text));
},
})



export default connect(null, mapDispatchToProps)(AddMess)
