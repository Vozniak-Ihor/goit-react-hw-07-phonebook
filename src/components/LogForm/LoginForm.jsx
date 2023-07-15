import * as yup from 'yup';
import css from './LoginForm.module.css';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector} from 'react-redux';
import { addContacts } from '../../redux/contactSlice/contactSlice';
import { getContacts } from 'redux/contactSlice/contactSelectors';

const schema = yup.object().shape({
  name: yup.string().required("Ім'я обов'язкове"),
  phoneNumber: yup
    .string()
    // .matches(
    //   /^(\+?3?8)?(0\d{9})$/,
    //   'The number should look like this: +380XXXXXXXXX'
    // )
    // .required("Номер телефону обов'язковий"),
});

const initialValues = {
  name: '',
  phoneNumber: '',
};

const LoginForm = () => {
  const storeContacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const contactId = nanoid();
    if (storeContacts.some(item => item.name === values.name)) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    const newContact = {
      id: contactId,
      name: values.name,
      number: values.phoneNumber.toString(),
    };
    dispatch(addContacts(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className={css.addContactForm} autoComplete="off">
        <label>
          Name
          <Field className={css.contactInput} type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>

        <label>
          Number
          <Field className={css.contactInput} type="tel" name="phoneNumber" />
          <ErrorMessage name="phoneNumber" component="div" />
        </label>
        <button className={css.submitButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;


