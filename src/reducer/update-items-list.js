const updateItemsList = (state, action) => {
    if (state === undefined) {
        return {
            items: [],
            loading: true,
            error: null
        }
    }

    switch (action.type) {
        case 'FETCH_ITEMS_LIST_REQUEST':
            return {
                items: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_ITEMS_LIST_SUCCESS':
            return {
                items: [],
                loading: true,
                error: null
            };

        case 'FETCH_ITEMS_LIST_FAILURE':
            return {
                items: [],
                loading: false,
                error: action.payload
            };

        default:
            return state.itemsList;
    }
};

export default updateItemsList;
