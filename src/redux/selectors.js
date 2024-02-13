import { createSelector } from "reselect"

export const searchTextSelector = state => state.filters.search;
export const filterStatusSelector = state => state.filters.status;
export const filterPrioritiesSelector = state => state.filters.priorities;
export const todoListSelector = state => state.todoList;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    (todoList, status, searchText) => {
        return todoList.filter(todo => {
            if (status === "All") {
                return todo.name.includes(searchText)
            }
    
            return (
                todo.name.includes(searchText) &&
                (status === 'Completed'
                    ? todo.completed
                    : !todo.completed)
            )
        })
    }
)

// export const TodoListSelector = (state) => {
//     const searchText = searchTextSelector(state)

//     const todoRemaining = state.todoList.filter((item) => item.name.includes(searchText))
//     return todoRemaining;
// }

