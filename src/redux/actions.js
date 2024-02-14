export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const toggleTodoStatus = (todoId) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: todoId
    }
}

export const checkedTodo = (id) => {
    return {
        type: 'todoList/checked',
        payload: id
    }
}

export const searchFilterChange = (text) => {
    return {
        type: "filter/searchFilterChange",
        payload: text
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'filter/statusFilterChange',
        payload: status
    }
}

export const priorityFilterChange = (priorities) => {
    return {
        type: 'filter/prioritiesFilterChange',
        payload: priorities
    }
}