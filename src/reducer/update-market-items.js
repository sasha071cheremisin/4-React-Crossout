const getMatketItem = (state,item) => {
    return [
        ...state.marketItems.items,
        item
    ];
}
const updateMarketItems = (state, action) => {
    if (state === undefined) {
        return {
            items: [],
            loading: true,
            error: null
        }
    }

    switch (action.type) {
        case 'FETCH_MARKET_ITEMS_REQUEST':
            return {
                items: getMatketItem(state,action.payload),
                loading: false,
                error: null
            };

        case 'FETCH_MARKET_ITEMS_SUCCESS':
            return {
                items: state.marketItems.items,
                loading: true,
                error: null
            };

        case 'FETCH_MARKET_ITEMS_FAILURE':
            return {
                items: state.marketItems.items,
                loading: false,
                error: action.payload
            };

        default:
            return state.marketItems;
    }
};

export default updateMarketItems;
