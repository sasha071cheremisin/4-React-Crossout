const updatePagination = (state, action) => {
    if (state === undefined) {
        return {
            perPage: 10,
            currentPage: 1
        };
    }

    switch (action.type) {
        case 'CHANGE_CURRENT_PAGE':
            return {
                ...state.paginationItemsList,
                currentPage: action.payload
            };

        case 'CHANGE_PER_PAGE':
            return {
                ...state.paginationItemsList,
                perPage: action.payload
            };

        default:
            return state.paginationItemsList;
    }
};

export default updatePagination;
