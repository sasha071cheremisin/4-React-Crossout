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

const changeFilter = (value) => {
    return {
        type: 'CHANGE_FILTER',
        payload: value
    };
};

export {
    fetchItemsList,
    changeFilter
};
