import { ErrorMessage, Formik } from 'formik';
import PropTypes from 'prop-types';
import {
  FormButton,
  FormInput,
  FormLabel,
  FormSpan,
  FormStyled,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contscts/thunk';
import { Report } from 'notiflix';
import { selectContacts } from 'redux/contscts/selector';
import { useEffect } from 'react';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const nameCheck = name => {
    return contacts.filter(contact => contact.name.includes(name));
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    const check = nameCheck(values.name);

    if (check.length <= 0) {
      dispatch(addContact(values));
      return;
    }

    Report.info('Warning!', `"${values.name}" is already in contacts`, 'Okay');
  };

  useEffect(() => {
    if (contacts.length === 0) {
      return;
    }
  }, [contacts]);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormStyled>
        <FormLabel>
          <FormSpan>Name</FormSpan>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormSpan>Number</FormSpan>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" />
        </FormLabel>
        <FormButton type="submit">add contact</FormButton>
      </FormStyled>
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  checkName: PropTypes.func,
  handleSubmit: PropTypes.func,
  contacts: PropTypes.array,
  dispatch: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
  resetForm: PropTypes.func,
};
