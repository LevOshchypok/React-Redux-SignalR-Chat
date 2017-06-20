import React from 'react';
import {connect} from 'react-redux';
import MessageBox from './MessageBox';
import DiagItem from './DiagItem';
import {addDialogue} from '../actions/action';
import {getCurrendDialog} from '../actions/action';
import AddDiagButton from './AddDiagButton'




class DialogueBox extends React.Component{
    constructor(props){
        super(props);

        this.state={ dialogues:this.props.dialogues,
                     dialogId:this.props.currentDiagId,
                     messages:[],
                     }

        this.addChanel = this.addChanel.bind(this);
        this.UpadatesTrigger = this.UpadatesTrigger.bind(this);
    }

    UpadatesTrigger(){
        this.setState({
            dialogues:this.props.dialogues,
                messages:this.props.dialogues.filter(x=>x.id === this.props.currentDiagId)[0].messages
        })
    }

    componentWillReceiveProps(nextProps){
        console.log("I am in componentWillReceiveProps before if");
        if(nextProps != this.props)
        {
            console.log("I am in componentWillReceiveProps after if");
            this.setState({dialogues:nextProps.dialogues,
                messages:nextProps.dialogues.filter(x=>x.id === nextProps.currentDiagId)[0].messages});   
        }
    }
    addChanel(name){
        console.log("I am in add chanel dailog box");
        this.props.addDiag(name);
        this.setState({dialogues:this.props.dialogues});
    }
        
    render(){
        return(
            <div className="wraper">
                <div id="content">
                    <div id="dialogue-part">        
                    <div id="dialogue-part-list">
                        {this.state.dialogues.map(dialog =>
                        <DiagItem  diagID={dialog.id} name={dialog.name}  />
                        )}
                    </div>
                        <AddDiagButton addChanel={this.addChanel}/>
                    <div>
                    </div>
                </div>
                    <MessageBox UpadatesTrigger={this.UpadatesTrigger} messages={this.state.messages} DialogID={this.props.currentDiagId}/>
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


