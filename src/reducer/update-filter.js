const updateTerms = (arrayTerms, value) => {
    const indexValue = arrayTerms.indexOf(value);
    let newArray = [];

    if (indexValue !== -1) {
        newArray = [
            ...arrayTerms.slice(0, indexValue),
            ...arrayTerms.slice(indexValue + 1)
        ]
    } else {
        newArray = [
            ...arrayTerms,
            value
        ]
    }

    const indexAllTerm = newArray.indexOf('All');

    if (indexAllTerm !== -1) {
        newArray = [
            ...newArray.slice(0, indexAllTerm),
            ...newArray.slice(indexAllTerm + 1)
        ];

    }

    if (value === 'All' || newArray.length === 0) {
        return ['All'];
    }

    return newArray;
};

const updateFilter = (state, action) => {
    if (state === undefined) {
        return {
            rarityFilter: ["All"],
            fractionFilter: ["All"],
            searchTerm: ''
        };
    }

    switch (action.type) {
        case 'CHANGE_FRACTION_FILTER':
            const fractionFilter = state.filter.fractionFilter;

            return {
                ...state.filter,
                fractionFilter: updateTerms(fractionFilter, action.payload)
            };

        case 'CHANGE_RARITY_FILTER':
            const rarityFilter = state.filter.rarityFilter;

            return {
                ...state.filter,
                rarityFilter: updateTerms(rarityFilter, action.payload)
            };

        case 'CHANGE_SEARCH_TERM':
            return {
                ...state.filter,
                searchTerm: action.payload
            };

        default:
            return state.filter;
    }
};

export default updateFilter;
