let id = 0;
export default function reducer(state = {todos: []}, action) {

    switch (action.type) {
        case 'ADD':
            return {
                todos : [...state.todos, {text: action.text, isDown: false, id: id++}]
                }

    }
    return state;
}