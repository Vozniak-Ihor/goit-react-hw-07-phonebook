import React from 'react';
import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import {
  contactsSelector,
  isLoadingSelector,
} from 'redux/contactSlice/contactSelectors';
import { getFilter } from 'redux/filterSlice/filterSelectors';
import { useState } from 'react';

const ContactsList = () => {
  const isLoading = useSelector(isLoadingSelector);
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

  return (
    <>
      {/* {isLoading ? (
        <p className={css.isLoading}>Loading</p>
      ) : ( */}
      <ul className={css.contactList}>
        {isLoading && <p className={css.isLoading}>Loading</p>}
        {filteredContact().map(({ id, name, number }) => (
          <li className={css.contactItem} key={id}>
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
        ))}
      </ul>
      {/*  )} */}
    </>
  );
};

export default ContactsList;
