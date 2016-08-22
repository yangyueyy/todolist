import React, {Component} from "react";
import {render} from 'react-dom';
import {connect} from 'react-redux';

class AddToDo extends Component {
    add(event) {
        if(event.keyCode==13){
            this.props.onAdd(this.refs.text.value);
            this.refs.text.value = '';
        }
    }
    render() {
        return (
            <div>
                <input type="text" ref='text' onKeyUp={this.add.bind(this)}/>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onAdd: (text)=>{dispatch({type: 'ADD', text})}
    }
}

export default connect(()=>{return{}},mapDispatchToProps)(AddToDo);