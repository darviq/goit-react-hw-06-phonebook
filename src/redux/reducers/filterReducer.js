import {createAction} from "@reduxjs/toolkit";
import {createReducer} from "@reduxjs/toolkit";
import {filter} from "../actionTypes/actionTypes";

export const changeFilter = createAction(filter.change);

const filterReducer = createReducer("", {
    [changeFilter]: (state, {payload}) => (state = payload),
});

export default filterReducer;
