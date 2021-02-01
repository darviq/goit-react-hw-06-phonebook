import {createAction} from "@reduxjs/toolkit";
import {createReducer} from "@reduxjs/toolkit";
import {contacts} from "../actionTypes/actionTypes";
import {v4 as uuidv4} from "uuid";

export const addContact = createAction(contacts.add);
export const addLocalContacts = createAction(contacts.addLocal);
export const removeContact = createAction(contacts.remove);

const contactsReducer = createReducer([], {
    [addContact]: (state, {payload}) =>
        (state = [
            ...state,
            {
                name: payload.name,
                number: payload.number,
                id: uuidv4(),
            },
        ]),
    [addLocalContacts]: (state, {payload}) => (state = [...payload]),
    [removeContact]: (state, {payload}) => (state = [...state.filter(contact => contact.id !== payload)]),
});

export default contactsReducer;
