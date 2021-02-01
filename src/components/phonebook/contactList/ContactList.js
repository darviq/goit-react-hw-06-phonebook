import {TransitionGroup} from "react-transition-group";
import {useSelector} from "react-redux";
import {ContactItem, Li} from "./contactItem/ContactItem";

const ContactList = () => {
    const filter = useSelector(state => state.contacts.filter.toLowerCase());
    const contacts = useSelector(state => state.contacts.items.filter(contact => contact.name.toLowerCase().includes(filter)));

    return (
        <TransitionGroup component="ul">
            {contacts.map(contact => (
                <Li key={contact.id} timeout={1000} mountOnEnter unmountOnExit>
                    <ContactItem {...contact} />
                </Li>
            ))}
        </TransitionGroup>
    );
};

export default ContactList;
