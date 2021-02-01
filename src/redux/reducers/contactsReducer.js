import {v4 as uuidv4} from "uuid";
import {contacts} from "../actionTypes/actionTypes";

export const addContact = data => {
    return {
        type: contacts.add,
        payload: data,
    };
};

export const addLocalContacts = data => {
    return {
        type: contacts.addLocal,
        payload: data,
    };
};

export const removeContact = id => {
    return {
        type: contacts.remove,
        payload: id,
    };
};

const contactsReducer = (state = [], {type, payload}) => {
    switch (type) {
        case contacts.add:
            return (state = [
                ...state,
                {
                    name: payload.name,
                    number: payload.number,
                    id: uuidv4(),
                },
            ]);

        case contacts.addLocal:
            return (state = [...payload]);

        case contacts.remove:
            return (state = [...state.filter(contact => contact.id !== payload)]);

        default:
            return state;
    }
};

export default contactsReducer;
