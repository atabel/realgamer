export const platforms = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_PLATFORMS':
            return action.payload;
        default:
            return state;
    }
};