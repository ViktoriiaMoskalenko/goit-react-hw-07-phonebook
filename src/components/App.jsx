import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';

import { ContactList } from './Phonebook/ContactList'
import { ContactForm } from './Phonebook/ContactForm'
import { Filter } from './Phonebook/Filter'
import styles from './Phonebook/Phonebook.module.css'

export function App() {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <div>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm/>
        <h2 className={styles.title}>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList/>
      </div>
    )
  }