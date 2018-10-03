let defaultState = {
    page: 0
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'PAGE_CHANGE':
            return {
                ...state,
                page: action.page
            };
        default:
            return state
    }
}