import React, {Component} from "react";
import {render} from 'react-dom';
import AddToDo from "./add-todo";

class App extends Component{
    render() {
        return (
            <div>
               <AddToDo />
            </div>
        )
    }
}

export default App;
