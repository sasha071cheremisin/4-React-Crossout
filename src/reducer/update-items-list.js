const changeItemsIncome = ({itemsList:{items}},payload) => {
    const craftingSum = payload === 'buySum' ? 'craftingBuy' : 'craftingSell';
    const newItems = [...items].map((item)=>{
        const incomeBuy = ((item.priceBuy*(0.9)) - item[craftingSum]).toFixed(2);
        const incomeSell = ((item.priceSell*(0.9)) - item[craftingSum]).toFixed(2);
        return {
            ...item,
            incomeBuy,
            incomeSell
        };
    });

    return newItems;
}

const updateItemsList = (state, action) => {
    if (state === undefined) {
        return {
            items: [],
            loading: false,
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

        case 'CHANGE_CRAFTING_FORMAT':
            return {
                ...state,
                items: changeItemsIncome(state,action.payload)
            };

        default:
            return state.itemsList;
    }
};

export default updateItemsList;
