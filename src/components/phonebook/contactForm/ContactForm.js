import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addContact} from "../../../redux/reducers/contactsReducer";
import Form from "./ContactFormStyled";

const ContactForm = ({contacts, contactExists}) => {
    const [state, setState] = useState({
        name: "",
        number: "",
    });

    const dispatch = useDispatch();

    const inputHandler = e => {
        const {name, value} = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const submitHandler = e => {
        e.preventDefault();
        if (contacts.find(contact => contact.name === state.name)) {
            contactExists();
        } else {
            dispatch(addContact({...state}));
            setState({name: "", number: ""});
        }
    };

    return (
        <Form onSubmit={submitHandler}>
            <label>
                Name
                <input type="text" value={state.name} name="name" onChange={inputHandler} />
            </label>
            <label>
                Number
                <input type="text" value={state.number} name="number" onChange={inputHandler} />
            </label>
            <button type="submit">Add contact</button>
        </Form>
    );
};

export default ContactForm;
