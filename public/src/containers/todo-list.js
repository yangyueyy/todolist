import React, {Component} from 'react';
import {connect} from 'react-redux';

class ToDoList extends Component {
    render() {
        const todosText = this.props.todos.map((item, index)=> {
            return <div key={index}>
                <input type="checkbox" checked={item.isDone} onClick={this.props.changeIsDown.bind(this, item.id)}/>
                {item.isDone ? <s>{item.text}</s> : item.text}
                <button onClick={this.props.remove.bind(this, item.id)}>X</button>
            </div>
        });
        return (
            <div>
                {todosText}
            </div>
        )
    }
}
function mapStateToProps(state) {
    if (state.filterName === 'ACTIVE') {
        return {todos:state.todos.filter((todo)=>!todo.isDone)};
    }
    else if (state.filterName === 'COMPLETED') {
        return {todos:state.todos.filter((todo)=>todo.isDone)};
    }
    else{
        return {todos:state.todos};
    }

}

function mapDispatchProps(dispach) {
    return {
        changeIsDown: (id)=>dispach({type: 'CHANGEISDOWN', id}),
        remove: (id)=>dispach({type: 'DELETE', id})
    }
}

export default connect(mapStateToProps, mapDispatchProps)(ToDoList);