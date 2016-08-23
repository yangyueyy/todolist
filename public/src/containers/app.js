import React, {Component} from "react";
import {render} from 'react-dom';
import AddToDo from "./add-todo";
import ToDoList from './todo-list';
import Footer from './footer';

class App extends Component{
    render() {
        return (
            <div>
                todos
               <AddToDo />
                <ToDoList/>
                <Footer />
            </div>
        )
    }
}

export default App;
