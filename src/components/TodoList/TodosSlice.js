// const initState = [
//     { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
//     { id: 2, name: 'Learn Redux', completed: false, priority: 'High' },
//     { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' }
// ]

// const TodoListReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'todoList/addTodo':
//             return [...state, action.payload]
//         case 'todoList/toggleTodoStatus':
//             return state.map(todo =>
//                 todo.id === action.payload
//                     ? { ...todo, completed: !todo.completed }
//                     : todo
//             );
//         default:
//             return state
//     }

// }

// export default TodoListReducer

import { createSlice } from "@reduxjs/toolkit";

export const TodosSlice = createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
        { id: 2, name: 'Learn Redux', completed: false, priority: 'High' },
        { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' }
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload)
            currentTodo.completed = !currentTodo.completed
        }
    }
})

export const { addTodo, toggleTodoStatus } = TodosSlice.actions;

export default TodosSlice.reducer;