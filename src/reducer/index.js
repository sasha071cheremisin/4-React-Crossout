import updateItemsList from './update-items-list';
import updateFractionFilter from './update-fraction-filter';

const reducer = (state, action) => {
    return {
        itemsList: updateItemsList(state, action),
        fractionFilter: updateFractionFilter(state, action),
    }
};

export default reducer;
