import React, {useState} from "react";
import Form from "./ContactFormStyled";

const ContactForm = ({addContact}) => {
    const [state, setState] = useState({
        name: "",
        number: "",
    });

    const inputHandler = e => {
        const {name, value} = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const submitHandler = e => {
        e.preventDefault();
        addContact({...state});
        setState({name: "", number: ""});
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
