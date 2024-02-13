const initState = {
    search: '',
    status: 'All',
    priority: []
}

const FiltersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'filter/searchFilterChange':
            return {
                ...state.filters,
                search: action.payload
            };
        case 'filter/statusFilterChange':
            return {
                ...state,
                status: action.payload
            }
        case 'filter/prioritiesFilterChange':
            return {
                ...state,
                priorities: action.payload
            }
        default:
            return state
    }

}

export default FiltersReducer