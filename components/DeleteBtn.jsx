import React, {Component} from 'react'
import ReactDOM from 'react-dom'

let styleBtn = {
    color: 'red',
    textAlign: 'center'
}
class DeleteBtn extends Component{
    constructor(props){
        super(props)
    }
    deleteAllTask = () =>{
        if(typeof this.props.fnD == 'function'){
            this.props.fnD();
        }
    }
    render(){
        return(
            <div style={styleBtn} title="Delete all tasks" onClick={this.deleteAllTask}>Delete list</div>
        )
    }
}

export default DeleteBtn