import {filter} from "../actionTypes/actionTypes";

export const changeFilter = value => {
    return {
        type: filter.change,
        payload: value,
    };
};

const filterReducer = (state = "", {type, payload}) => {
    switch (type) {
        case filter.change:
            return (state = payload);

        default:
            return state;
    }
};

export default filterReducer;
