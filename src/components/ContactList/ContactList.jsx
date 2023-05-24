import PropTypes from 'prop-types';
import { ContactItem, ContactItems } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'components/features/thunk';
import { useEffect } from 'react';
import {
  selectContacts,
  selectFilter,
  selectIsLoading,
} from 'components/Selector/Selector';
import { PulseLoader } from 'react-spinners';

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
      {!selectIsLoading && (
        <span>
          <PulseLoader color="black" size={10} />
        </span>
      )}
      <ContactItems>
        {contactsListClear.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: {number}
            <button onClick={() => dispatch(deleteContact(id))} type="button">
              Delete
            </button>
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
