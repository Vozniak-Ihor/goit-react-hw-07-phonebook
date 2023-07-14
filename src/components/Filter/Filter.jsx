import React from 'react';
import css from './Filter.module.css';
import {
  contactfilter,
  deletefilter,
} from '../../redux/filterSlice/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice/filterSelectors';

const Filter = () => {
  const storeFilter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filter = value => {
    dispatch(contactfilter(value));
  };

  const handleClick = () => {
    dispatch(deletefilter());
  };

  return (
    <form className={css.searchContactForm}>
      <h2 className={css.searchLabel} htmlFor="findContacts">
        Find contacts by name
      </h2>
      <div className={css.d}>
        <input
          className={css.searchInput}
          type="text"
          id="findContacts"
          onChange={e => filter(e.target.value)}
          value={storeFilter}
        />
        {storeFilter&& <span onClick={handleClick}>
          <svg
            className={css.deleteSvgIcon}
            width="14"
            height="14"
            viewBox="0 0 32 32"
          >
            <path d="M30.726 25.101c-0-0-0-0-0-0l-9.101-9.101 9.101-9.101c0-0 0-0 0-0 0.098-0.098 0.169-0.213 0.214-0.334 0.124-0.333 0.053-0.723-0.215-0.991l-4.299-4.299c-0.268-0.268-0.658-0.339-0.991-0.214-0.122 0.045-0.236 0.116-0.334 0.214 0 0-0 0-0 0l-9.101 9.101-9.101-9.101c-0-0-0-0-0-0-0.098-0.098-0.213-0.169-0.334-0.214-0.333-0.124-0.723-0.054-0.991 0.214l-4.299 4.299c-0.268 0.268-0.339 0.658-0.214 0.991 0.045 0.122 0.116 0.236 0.214 0.334 0 0 0 0 0 0l9.101 9.101-9.101 9.101c-0 0-0 0-0 0-0.098 0.098-0.169 0.213-0.214 0.334-0.124 0.333-0.054 0.723 0.214 0.991l4.299 4.299c0.268 0.268 0.658 0.339 0.991 0.215 0.122-0.045 0.236-0.116 0.334-0.214 0-0 0-0 0-0l9.101-9.101 9.101 9.101c0 0 0 0 0 0 0.098 0.098 0.213 0.169 0.334 0.214 0.333 0.124 0.723 0.053 0.991-0.215l4.299-4.299c0.268-0.268 0.339-0.658 0.215-0.991-0.045-0.122-0.116-0.236-0.214-0.334z"></path>
          </svg>
        </span>}
      </div>
    </form>
  );
};

export default Filter;
