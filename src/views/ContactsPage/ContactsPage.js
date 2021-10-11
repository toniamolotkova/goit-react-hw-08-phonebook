import ContactForm from 'components/ContactForm';
import  Section from 'components/Section';
import ContactsList  from 'components/ContactsList';
import Filter from 'components/Filter';

const ContactsPage = () => {
    return (
        <>
        <ContactForm />
        <Section title="Contacts">
          <Filter /> 
           <ContactsList/> 
        </Section> 
        </>

    )
}

export default ContactsPage;