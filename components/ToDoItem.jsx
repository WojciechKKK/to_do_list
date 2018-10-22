import React, { Component } from 'react';

class ToDoItem extends Component{
  //ustawienei wartości domyślnej dla props
    static defaultProps = {
      done: false,
    }
    constructor(props){
      super(props);
      this.state = {
        done: this.props.done
      }
    }

    changeColor = () =>{
     this.setState({
       done: !this.state.done
     })
    }

    render(){
      return(
        <div onClick={this.changeColor} className={this.state.done ? 'doneToDo' : ''}>
          <p>
            {this.props.element}
          </p>
        </div>
      )
    }
  }
 
  export default ToDoItem;

