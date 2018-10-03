let defaultState = {
    images: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_IMAGES':
            return {
                ...state,
                images: [...state.images, action.image]
            };
        case 'RESET_IMAGES':
            return defaultState;
        default:
            return state
    }
}