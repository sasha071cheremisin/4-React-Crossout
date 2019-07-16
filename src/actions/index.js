const itemsListLoaded = (newItemsList) => {
    return {
        type: 'FETCH_ITEMS_LIST_REQUEST',
        payload: newItemsList
    };
};

const itemsListRequested = () => {
    return {
        type: 'FETCH_ITEMS_LIST_SUCCESS'
    };
};

const itemsListError = (error) => {
    return {
        type: 'FETCH_ITEMS_LIST_FAILURE',
        payload: error
    };
};

const fetchItemsList = (dispatch, crossoutService) => () => {
    dispatch(itemsListRequested());
    crossoutService.getAllItems()
        .then((data) => {
            console.log('result data -',data)
            dispatch(itemsListLoaded(data));
        })
        .catch((err) => {
            dispatch(itemsListError(err));
        })
};

const changeFractionFilter = (value) => {
    return {
        type: 'CHANGE_FRACTION_FILTER',
        payload: value
    };
};

const changeRarityFilter = (value) => {
    return {
        type: 'CHANGE_RARITY_FILTER',
        payload: value
    };
};

const changeSort = (value) => {
    return {
        type: 'CHANGE_SORT',
        payload: value
    };
};

const changeCraftingFormat = (value) => {
    return {
        type: 'CHANGE_CRAFTING_FORMAT',
        payload: value
    };
};

const changeCurrentPage = (value) => {
    return {
        type: 'CHANGE_CURRENT_PAGE',
        payload: value
    };
};

const changePerPage = (value) => {
    return {
        type: 'CHANGE_PER_PAGE',
        payload: value
    };
};

const changeSearchTerm = (value) => {
    return {
        type: 'CHANGE_SEARCH_TERM',
        payload: value
    };
};

const marketItemsLoaded = (newMarketItem) => {
    return {
        type: 'FETCH_MARKET_ITEMS_REQUEST',
        payload: newMarketItem
    };
};

const marketItemsRequested = () => {
    return {
        type: 'FETCH_MARKET_ITEMS_SUCCESS'
    };
};

const marketItemsError = (error) => {
    return {
        type: 'FETCH_MARKET_ITEMS_FAILURE',
        payload: error
    };
};

const fetchMarketItems = (dispatch, crossoutService) => (id) => {
    dispatch(marketItemsRequested());
    crossoutService.getMarketItem(id)
        .then((data) => {
            dispatch(marketItemsLoaded(data));
        })
        .catch((err) => {
            dispatch(marketItemsError(err));
        })
};

export {
    fetchItemsList,
    changeFractionFilter,
    changeRarityFilter,
    changeSort,
    changeCraftingFormat,
    changeCurrentPage,
    changePerPage,
    changeSearchTerm,
    fetchMarketItems
};
