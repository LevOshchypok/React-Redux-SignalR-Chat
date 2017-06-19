import React from 'react';
import {connect} from 'react-redux';
import {getCurrendDialog} from '../actions/action';
 

class DiagItem extends React.Component{
    constructor(props){
        super(props)
        
        this.getMess = this.getMess.bind(this);
    }
    getMess(){
        console.log("I am in get mess diag item");
        console.log(    this.props.diagID)
        this.props.getDiagid(this.props.diagID);
                
    }

    render(){
        return(
            <button onClick={this.getMess}>{this.props.diagID}</button>
        );
    }
}


const mapDispatchToProps=(dispatch)=>({getDiagid: (diagID)=>{
    dispatch(getCurrendDialog(diagID));
},
})

export default connect(null, mapDispatchToProps)(DiagItem)

