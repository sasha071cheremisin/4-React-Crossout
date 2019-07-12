import updateItemsList from './update-items-list';
import updateFilter from './update-filter';
import updateSorting from './update-sorting';
import updateCraftingFormat from './update-crafting-format';

const reducer = (state, action) => {
    return {
        itemsList: updateItemsList(state, action),
        filter: updateFilter(state, action),
        sort: updateSorting(state,action),
        craftingFormat: updateCraftingFormat(state,action),
    }
};

export default reducer;
