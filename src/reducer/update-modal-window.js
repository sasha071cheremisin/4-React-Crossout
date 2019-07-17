const updateModalWindow = (state, action) => {
    if (state === undefined) {
        return false;
    }

    switch (action.type) {
        case 'TOGGLE_MODAL_WINDOW':
            return !state.openModal;

        default:
            return state.openModal;
    }
};

export default updateModalWindow;
