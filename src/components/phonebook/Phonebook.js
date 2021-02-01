import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
import Notification from "./notification/Notification";
import {Div, H1} from "./PhonebookStyled";
import {addLocalContacts} from "../../redux/reducers/contactsReducer";

const Phonebook = ({contacts, addLocalContacts}) => {
    const [state, setState] = useState({
        showNotification: false,
    });

    useEffect(() => {
        const localSorageContacts = JSON.parse(localStorage.getItem("contacts"));
        if (localSorageContacts && localSorageContacts.length > 0) {
            addLocalContacts([...localSorageContacts]);
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
            <Notification notif={state.showNotification} />
        </Div>
    );
};

const mapStateToProps = state => {
    return {
        contacts: state.contacts.items,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addLocalContacts: data => dispatch(addLocalContacts(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
