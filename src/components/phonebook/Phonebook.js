import React, {useState, useEffect} from "react";
import {v4 as uuidv4} from "uuid";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
import Notification from "./notification/Notification";
import {Div, H1} from "./PhonebookStyled";

const Phonebook = () => {
    const [state, setState] = useState({
        contacts: [],
        filter: "",
        showNotification: false,
    });

    useEffect(() => {
        const localSorageContacts = JSON.parse(localStorage.getItem("contacts"));
        if (localSorageContacts && localSorageContacts.length > 0) {
            setState({
                contacts: [...localSorageContacts],
                filter: "",
                showNotification: false,
            });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(state.contacts));
    }, [state.contacts]);

    const addFilter = value => {
        setState(prevState => ({
            ...prevState,
            filter: value,
        }));
    };

    const contactExists = () => {
        setState(prevState => ({
            ...prevState,
            showNotification: true,
        }));
        setTimeout(() => {
            setState(prevState => ({
                ...prevState,
                showNotification: false,
            }));
        }, 5000);
    };

    const addContact = ({name, number}) => {
        if (state.contacts.find(contact => contact.name === name)) {
            contactExists();
        } else {
            setState(prevState => ({
                ...prevState,
                contacts: [
                    ...prevState.contacts,
                    {
                        name: name,
                        number: number,
                        id: uuidv4(),
                    },
                ],
            }));
        }
    };

    const removeContact = e => {
        setState(prevState => ({
            ...prevState,
            contacts: [...prevState.contacts.filter(contact => contact.id !== e.target.dataset.id)],
        }));
    };

    return (
        <Div>
            <H1 in={true} appear timeout={500}>
                Phonebook
            </H1>
            <ContactForm addContact={addContact} />
            {state.contacts.length > 0 && (
                <>
                    <h2>Contacts</h2>
                    <Filter addFilter={addFilter} />
                </>
            )}
            <ContactList {...state} removeContact={removeContact} />
            <Notification notif={state.showNotification} />
        </Div>
    );
};

export default Phonebook;
