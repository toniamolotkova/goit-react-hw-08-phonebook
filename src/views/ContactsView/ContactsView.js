import ContactForm from '../../components/ContactForm/ContactForm';
import ContactsList from '../../components/ContactsList/ContactsList';
import Section from '../../components/Section/Section';
import { useSelector } from 'react-redux';
import Filter from '../../components/Filter/Filter';

const ContactsView = () => {
    const contacts = useSelector((state) => state.contacts.items);
    return (
      <>
        <ContactForm /> 
        <Section title="Contacts">
          <Filter /> 
          { contacts && <ContactsList/> }
        </Section> 
      </>
    );
}

export { ContactsView };