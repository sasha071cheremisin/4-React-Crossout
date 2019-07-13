import updateItemsList from './update-items-list';
import updateFilter from './update-filter';
import updateSorting from './update-sorting';
import updateCraftingFormat from './update-crafting-format';
import updatePagination from './update-pagination';

const reducer = (state, action) => {
    console.log(action)
    return {
        itemsList: updateItemsList(state, action),
        filter: updateFilter(state, action),
        sort: updateSorting(state,action),
        craftingFormat: updateCraftingFormat(state,action),
        paginationItemsList: updatePagination(state, action)
    }
};

export default reducer;
