const updateCraftingFormat = (state, action) => {
    if (state === undefined) {
        return 'buySum';
    }

    switch (action.type) {
        case 'CHANGE_CRAFTING_FORMAT':
            return action.payload;

        default:
            return state.craftingFormat;
    }
};

export default updateCraftingFormat;
