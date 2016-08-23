import React, {Component} from 'react';
import {connect} from 'react-redux';

class Footer extends Component {
    render() {
        const footer = ['ALL', 'ACTIVE', 'COMPLETED'].map((item, index)=>
            <a key={index} style={{'textDecoration': this.props.name === item ? 'underline' : ''}}
               onClick={this.props.changeName.bind(this,item)}>
                {item}{'  '}
            </a>
        );
        return <div>
            {footer}
            <button onClick={this.props.removeAll.bind(this,this.props.todos)}>CLEAR COMPLETED</button>
        </div>

    }
}

function mapStateToProps(state) {
    return {
        todos:state.todos,
        name:state.filterName
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeName:(name)=>dispatch({type:'CHANGENAME',name}),
        removeAll:(todos)=>{
            let active = todos.filter(todo=>!todo.isDone);
            dispatch({type:'REMOVEALLCOMPLETED',active})
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);