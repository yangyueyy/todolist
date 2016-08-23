let id = 0;
export default function reducer(state = {todos: [],filterName:'ALL'}, action) {

    switch (action.type) {
        case 'ADD':
            return {
                todos : [...state.todos, {text: action.text, isDone: false, id: id++}],
                filterName:state.filterName
                }
        case 'CHANGEISDOWN':
            const todo=state.todos.find(todo=>todo.id === action.id);
            todo.isDone=!todo.isDone;
            return {
                todos:[...state.todos],
                filterName:state.filterName

            }
        case 'DELETE':
            const index=state.todos.indexOf(state.todos.find(todo=>todo.id === action.id));
            state.todos.splice(index,1);
            return{
                todos:[...state.todos],
                filterName:state.filterName
            }
        case 'CHANGENAME':
            return {
                todos:[...state.todos],
                filterName:action.name
            }
        case 'REMOVEALLCOMPLETED':
            return {
                todos:[...action.active],
                filterName:state.filterName
            }


    }
    return state;
}