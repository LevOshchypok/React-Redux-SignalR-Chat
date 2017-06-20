import React from 'react'

class DiagNameInput extends React.Component{
    constructor(props){
        super(props);
        this.state={name:''}
        this.handleNameChange = this.handleNameChange.bind(this);
        this.submitName = this.submitName.bind(this);
    }

    handleNameChange(e){
        this.setState({name:e.target.value});
    }

    submitName(){
        this.props.addChanel(this.state.name);
        this.setState({name:''})
        this.props.close()
    }

    render(){
        if(!this.props.show){
            return null;
        }
        return(
            <div>
                <form onSubmit={this.submitName}>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}></input>
                    <button type="submit"> submit </button>
                </form>
                
            </div>
        );
}
}

class AddDiagButton extends React.Component{
    constructor(props){
        super(props)

        this.state={isOpen:false}
        this.toggleInput = this.toggleInput.bind(this);
    }

    toggleInput(){
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    render(){
        return(
            <div>
             <DiagNameInput  addChanel={this.props.addChanel} getData={this.getData} show={this.state.isOpen} close={this.toggleInput}/>
             <button className="dialogue-part-button" onClick={this.toggleInput}>Add Dialogue</button>
             </div>
        );
    }
}


export default AddDiagButton

