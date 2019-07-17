const getMarketItem = (state,item) => {
    return [
        ...state.marketItems.items,
        item
    ];
}

const inArray = (array,itemId) => {
    if(array.find(item=>item.itemId === itemId)) {
        return true;
    }
    return false;
}

const updateMarketItems = (state, action) => {
    if (state === undefined) {
        return {
            items: [],
            loading: false,
            error: null,
            currentItem: null
        }
    }

    switch (action.type) {
        case 'FETCH_MARKET_ITEMS_REQUEST':
            return {
                items: getMarketItem(state,action.payload),
                loading: false,
                error: null,
                currentItem: state.marketItems.currentItem
            };

        case 'FETCH_MARKET_ITEMS_SUCCESS':
            return {
                items: state.marketItems.items,
                loading: true,
                error: null,
                currentItem: state.marketItems.currentItem
            };

        case 'FETCH_MARKET_ITEMS_FAILURE':
            return {
                items: state.marketItems.items,
                loading: false,
                error: action.payload,
                currentItem: state.marketItems.currentItem
            };

        case 'UPDATE_CURRENT_MARKET_ID':
            return {
                ...state.marketItems,
                currentItem: action.payload,
                loading: !inArray(state.marketItems.items,action.payload)
            };

        default:
            return state.marketItems;
    }
};

export default updateMarketItems;
