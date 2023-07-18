import LoginForm from './LogForm/LoginForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { errorSelector } from '../redux/contactSlice/contactSelectors';

function App() {
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {error ? (
        <div>
          <p>Sorry, something went wrong.</p>
          <p>{error}</p>
          <p>Please try again a little later.</p>
        </div>
      ) : (
        <>
          <LoginForm />
          <Filter />
          <ContactsList />
        </>
      )}
    </div>
  );
}

export default App;

// export function App() {
//   return (
//     <>
//       <LoginForm />
//       <Filter />
//       <ContactsList />
//     </>
//   );
// }
