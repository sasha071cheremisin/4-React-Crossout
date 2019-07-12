const updateSorting = (state, action) => {
    if (state === undefined) {
        return 'incomeBuy';
    }

    switch (action.type) {
        case 'CHANGE_SORT':
            return action.payload;

        default:
            return state.sort;
    }
};

export default updateSorting;
