let defaultState = {
    isOpen: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'NAV_BAR_TOGGLE':
            return {
                ...state,
                isOpen: action.isOpen
            };
        default:
            return state
    }
}