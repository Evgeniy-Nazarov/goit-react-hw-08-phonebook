import { ContactItem, ContactItems } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'components/features/contactsSlice';
import { getFilter } from 'components/features/filteredSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onDelete = id => dispatch(deleteContact(id));

  const contactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ContactItems>
        {contactsList.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: {number}
            <button onClick={() => onDelete(id)} type="button">
              Delete
            </button>
          </ContactItem>
        ))}
      </ContactItems>
    </>
  );
};

export default ContactList;
