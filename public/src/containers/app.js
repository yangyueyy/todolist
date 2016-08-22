import React, {Component} from "react";
import {render} from 'react-dom';
import AddToDo from "./add-todo";
import ToDoList from './todo-list';

class App extends Component{
    render() {
        return (
            <div>
               <AddToDo />
                <ToDoList/>
            </div>
        )
    }
}

export default App;
