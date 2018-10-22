
import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import './style.css'
import ToDoList from '../components/ToDoList.jsx'

let myTask = [
  {name: 'task 1', done: false},
  {name: 'task 2', done: false},
  {name: 'task 3'}
]

let myTitle = 'My ToDo List'

const App = () => <ToDoList title={myTitle} myTasks={myTask} />

ReactDOM.render(
    <App />,
    document.getElementById('app')
)