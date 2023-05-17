import ContactForm from './ContactForm/ContactForm';
import { PhoneBook, Title } from './ContactForm/ContactForm.styled';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <PhoneBook>
      <Title>Phonebook</Title>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </PhoneBook>
  );
};
