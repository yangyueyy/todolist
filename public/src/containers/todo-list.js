import React, {Component} from 'react';
import {connect} from 'react-redux';

class ToDoList extends Component {
    render() {
        const todosText = this.props.todos.map((item, index)=> {
            return <div key={index}  >
                <input type="checkbox" checked={item.isDown} onClick={this.props.changeIsDown.bind(this,item.id)}/>
                {item.isDown? <s>{item.text}</s>  :item.text}
                <button>X</button>
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
    return {
        todos: state.todos
    }
}

function mapDispatchProps(dispach) {
    return{
        changeIsDown:(id)=>dispach({type:'CHANGEISDOWN',id})
    }
}

export default connect(mapStateToProps, mapDispatchProps)(ToDoList);