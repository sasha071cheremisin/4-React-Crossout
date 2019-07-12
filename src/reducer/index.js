import updateItemsList from './update-items-list';
import updateFilter from './update-filter';
import updateSorting from './update-sorting';

const reducer = (state, action) => {
    return {
        itemsList: updateItemsList(state, action),
        filter: updateFilter(state, action),
        sort: updateSorting(state,action),
    }
};

export default reducer;
