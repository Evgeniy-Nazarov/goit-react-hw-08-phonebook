import { PhoneBook, Title } from 'components/ContactForm/ContactForm.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { selectIsLoading } from 'redux/contscts/selector';
import { useSelector } from 'react-redux';
import { PulseLoader } from 'react-spinners';

export default function ContactsPage() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <PhoneBook>
      <Title>Phonebook</Title>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && (
        <span>
          <PulseLoader color="black" size={10} />
        </span>
      )}
      <ContactList />
    </PhoneBook>
  );
}
