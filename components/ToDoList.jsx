import React, { Component } from 'react'
import ToDoItem from '../components/ToDoItem.jsx'
import NewToDoForm from '../components/NewToDoForm.jsx'

class ToDoList extends Component{
    constructor(props){
      super(props);
      this.state = {
        tasks: this.props.myTasks,
        element: ''
      }
    }
    addToState = (e) => {
      this.setState({
        element: e.target.value
      })
    }
    addElement = () => {
      const {element, tasks} = this.state;
      if(element != false){
        let allList = tasks;
        allList.push({
          name: element, 
          done: false
        });
        this.setState({
        tasks: allList,
        element: ''
        })
      }
    }
    render(){
      const { tasks , element} = this.state;
      return(
        <div className="document">
          <h1>
            {this.props.title}
          </h1>
          {tasks.map((e,index) => <ToDoItem  key={index} element={e.name} done={e.done}/>)}
          <NewToDoForm 
            fnI={this.addToState} 
            val={element}
            fnC={this.addElement}
          />
        </div>
      )
    }
  }
  
  export default ToDoList