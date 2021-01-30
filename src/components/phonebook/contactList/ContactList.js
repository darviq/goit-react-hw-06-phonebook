import {ContactItem, Li} from "./contactItem/ContactItem";
import {TransitionGroup} from "react-transition-group";

const ContactList = ({contacts, filter, removeContact}) => {
    return (
        <TransitionGroup component="ul">
            {filter && filter.length > 0
                ? contacts
                      .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
                      .map(contact => (
                          <Li key={contact.id} timeout={1000} mountOnEnter unmountOnExit>
                              <ContactItem {...contact} removeContact={removeContact} />
                          </Li>
                      ))
                : contacts.map(contact => (
                      <Li key={contact.id} timeout={1000} mountOnEnter unmountOnExit>
                          <ContactItem {...contact} removeContact={removeContact} />
                      </Li>
                  ))}
        </TransitionGroup>
    );
};

export default ContactList;
