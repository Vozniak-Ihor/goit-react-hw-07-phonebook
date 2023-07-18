import React from 'react';
import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { contactsSelector } from 'redux/contactSlice/contactSelectors';
import { getFilter } from 'redux/filterSlice/filterSelectors';

const ContactsList = () => {
  const storeContacts = useSelector(contactsSelector);
  const storeFilter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContact = () => {
    return storeContacts.filter(({ name }) => {
      return name.toUpperCase().includes(storeFilter.toUpperCase());
    });
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return filteredContact().map(({ id, name, number }) => {
    return (
      <ul className={css.contactList} key={id}>
        <li className={css.contactItem}>
          <p className={css.contactDetails}>
            {name}: {number}
          </p>

          <button
            className={css.deleteButton}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            delete
          </button>
        </li>
      </ul>
    );
  });
};

export default ContactsList;
