import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
import Notification from "./notification/Notification";
import {Div, H1} from "./PhonebookStyled";
import {addLocalContacts} from "../../redux/reducers/contactsReducer";

const Phonebook = () => {
    const [state, setState] = useState({
        showNotification: false,
    });

    const contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();

    useEffect(() => {
        const localSorageContacts = JSON.parse(localStorage.getItem("contacts"));
        if (localSorageContacts && localSorageContacts.length > 0) {
            dispatch(addLocalContacts([...localSorageContacts]));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

    const contactExists = () => {
        setState({showNotification: true});
        setTimeout(() => {
            setState({showNotification: false});
        }, 4000);
    };

    return (
        <Div>
            <H1 in={true} appear timeout={500}>
                Phonebook
            </H1>
            <ContactForm contacts={contacts} contactExists={contactExists} />
            {contacts.length > 0 && (
                <>
                    <h2>Contacts</h2>
                    <Filter />
                </>
            )}
            <ContactList />
            <Notification showNotification={state.showNotification} />
        </Div>
    );
};

export default Phonebook;
