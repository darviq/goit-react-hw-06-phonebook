import {v4 as uuidv4} from "uuid";

const types = {
    add: "ADD_CONCTACT",
    addLocal: "ADD_LOCAL_CONCTACTS",
    remove: "REMOVE_CONCTACT",
};

export const addContact = data => {
    return {
        type: types.add,
        payload: data,
    };
};

export const addLocalContacts = data => {
    return {
        type: types.addLocal,
        payload: data,
    };
};

export const removeContact = id => {
    return {
        type: types.remove,
        payload: id,
    };
};

const contactsReducer = (state = [], {type, payload}) => {
    switch (type) {
        case types.add:
            return (state = [
                ...state,
                {
                    name: payload.name,
                    number: payload.number,
                    id: uuidv4(),
                },
            ]);

        case types.addLocal:
            return (state = [...payload]);

        case types.remove:
            return (state = [...state.filter(contact => contact.id !== payload)]);

        default:
            return state;
    }
};

export default contactsReducer;
