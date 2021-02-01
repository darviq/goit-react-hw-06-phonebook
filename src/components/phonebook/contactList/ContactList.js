import {TransitionGroup} from "react-transition-group";
import {connect} from "react-redux";
import {ContactItem, Li} from "./contactItem/ContactItem";
import {removeContact} from "../../../redux/reducers/contactsReducer";

const ContactList = ({contacts, removeContact}) => (
    <TransitionGroup component="ul">
        {contacts.map(contact => (
            <Li key={contact.id} timeout={1000} mountOnEnter unmountOnExit>
                <ContactItem {...contact} removeContact={removeContact} />
            </Li>
        ))}
    </TransitionGroup>
);

const mapStateToProps = state => {
    const loweredFilter = state.contacts.filter.toLowerCase();
    const filteredContacts = state.contacts.items.filter(contact => contact.name.toLowerCase().includes(loweredFilter));
    return {
        contacts: filteredContacts,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeContact: id => dispatch(removeContact(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
