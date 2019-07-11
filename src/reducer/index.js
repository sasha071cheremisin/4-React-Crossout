import updateItemsList from './update-items-list';
import updateFilter from './update-filter';

const reducer = (state, action) => {
    return {
        itemsList: updateItemsList(state, action),
        filter: updateFilter(state, action),
    }
};

export default reducer;
