const updateTerms = ({ fractionFilter }, value) => {
    const indexValue = fractionFilter.indexOf(value);
    let newArray = [];

    if (indexValue !== -1) {
        newArray = [
            ...fractionFilter.slice(0, indexValue),
            ...fractionFilter.slice(indexValue + 1)
        ]
    } else {
        newArray = [
            ...fractionFilter,
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

const updateFractionFilter = (state, action) => {
    if (state === undefined) {
        return ["All"];
    }

    switch (action.type) {
        case 'CHANGE_FILTER':
            return updateTerms(state, action.payload);

        default:
            return state.fractionFilter;
    }
};

export default updateFractionFilter;
