const types = {
    change: "CHANGE_FILTER",
};

export const changeFilter = value => {
    return {
        type: types.change,
        payload: value,
    };
};

const filterReducer = (state = "", {type, payload}) => {
    switch (type) {
        case types.change:
            return (state = payload);

        default:
            return state;
    }
};

export default filterReducer;
