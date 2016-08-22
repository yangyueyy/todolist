let id = 0;
export default function reducer(state = {todos: []}, action) {

    switch (action.type) {
        case 'ADD':
            return {
                todos : [...state.todos, {text: action.text, isDown: false, id: id++}]
                }
        case 'CHANGEISDOWN':
            const todo=state.todos.find(todo=>todo.id === action.id);
            todo.isDown=!todo.isDown;
            return {
                todos:[...state.todos]
            }
        case 'DELETE':
            const index=state.todos.indexOf(state.todos.find(todo=>todo.id === action.id));
            state.todos.splice(index,1);
            return{
                todos:[...state.todos]
            }

    }
    return state;
}