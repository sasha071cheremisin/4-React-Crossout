const updatePerPage = (state, value) => {
    const newValue = Number(value);
    const itemsLength = state.itemsList.items.length;
    return Number.isNaN(newValue) ? itemsLength : newValue;
}

const updatePagination = (state, action) => {
    if (state === undefined) {
        return {
            perPage: 5,
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
                perPage: updatePerPage(state, action.payload)
            };

        default:
            return state.paginationItemsList;
    }
};

export default updatePagination;
