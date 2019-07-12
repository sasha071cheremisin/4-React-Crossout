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

export {
    fetchItemsList,
    changeFractionFilter,
    changeRarityFilter,
    changeSort,
    changeCraftingFormat
};
