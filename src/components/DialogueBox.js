import React from 'react';
import {connect} from 'react-redux';
import MessageBox from './MessageBox';
import DiagItem from './DiagItem';
import {addDialogue} from '../actions/action';
import {getCurrendDialog} from '../actions/action';




class DialogueBox extends React.Component{
    constructor(props){
        super(props);

        this.state={ dialogues:this.props.dialogues,
                     messages:[]}

        this.addChanel = this.addChanel.bind(this);

    }

    componentWillReceiveProps(nextProps){
        if(nextProps!=this.props)
        {
            this.setState({messages:nextProps.dialogues.filter(x=>x.id === nextProps.currentDiagId)[0].messages});   
        }
    }
    addChanel(){
        this.props.addDiag("newOne");
    }
        
    render(){
        return(
            <div>
                <ul>
                    {this.state.dialogues.map(dialog =>
                    <DiagItem  diagID={dialog.id}  />
                    )}
                </ul>
                <button onClick={this.addChanel}>Add Dialogue</button>
                <div>
                    <MessageBox messages={this.state.messages} DialogID={this.props.currentDiagId}/>
                </div>
            </div>
        );
    }
}



function mapStateToProps(state){
    return{
        currentDiagId: state.currentDiagId,
        dialogues: state.dialogues
    };
}

const mapDispatchToProps=(dispatch)=>({addDiag: (name)=>{
    dispatch(addDialogue(name));
},
})


export default connect(mapStateToProps,mapDispatchToProps)(DialogueBox)


