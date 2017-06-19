import React from 'react';
import {connect} from 'react-redux';
import MessageBox from './MessageBox';


class DiagItem extends React.Component{
    constructor(props){
        super(props)
        
        this.getMess = this.getMess.bind(this);
    }
    getMess(){
        this.props.getMess(this.props.diagID)
    }

    render(){
        return(
            <button onClick={this.getMess}>{this.props.diagID}</button>
        );
    }
}

class DialogueBox extends React.Component{
    constructor(props){
        super(props);

        this.state={dialogId:0,
            messages:[{id:5, text:"Hello I am Lev"}]};

        this.getMessages = this.getMessages.bind(this);
    }



    getMessages(id){
        
        this.setState({dialogId:id,
            messages:this.props.dialogues.filter(x=>x.id === id)[0].messages});
        //this.setState({dialogId:id});
        console.log("id is " + id);
        console.log("this.state.Id  " + this.state.dialogId);
          // console.log(this.props.dialogues.filter(x=>x.id === id)[0].messages);
    }

    render(){
        return(
            <div>
                <ul>
                    {this.props.dialogues.map(dialog =>
                    <DiagItem getMess={this.getMessages} diagID={dialog.id}  />
                    )}
                </ul>
                <div>
                    <MessageBox messages={this.state.messages} DialogID={this.state.dialogId}/>
                </div>
            </div>
        );
    }
}



function mapStateToProps(state){
    return{
        dialogues: state.dialogues
    };
}

export default connect(mapStateToProps)(DialogueBox)


