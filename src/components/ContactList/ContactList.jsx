import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactItemButton,
  ContactItems,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contscts/thunk';
import { useEffect } from 'react';
import {
  selectContacts,
  selectFilter,
  selectIsLoading,
} from 'redux/contscts/selector';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactsListClear = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {!selectIsLoading && contacts.length <= 0 && (
        <p>There are no contacts in the list</p>
      )}

      <ContactItems>
        {contactsListClear.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: {number}
            <ContactItemButton
              onClick={() => dispatch(deleteContact(id))}
              type="button"
            >
              Delete
            </ContactItemButton>
          </ContactItem>
        ))}
      </ContactItems>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
