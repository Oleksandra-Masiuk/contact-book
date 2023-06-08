import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ContactList from './ContactList';
import SearchInput from './Search';

function Contacts(): JSX.Element {
  const [contacts, setContacts] = useState([
    {
      name: 'Devin',
      email: 'sasha@gmail.com',
      phonenumber: '+380478951258',
    },
    {name: 'Dan', email: 'sasha@gmail.com', phonenumber: '+380478951258'},
    {
      name: 'Dominic',
      email: 'sasha@gmail.com',
      phonenumber: '+380478951258',
    },
    {
      name: 'Jackson',
      email: 'sasha@gmail.com',
      phonenumber: '+380478951258',
    },
    {
      name: 'James',
      email: 'sasha@gmail.com',
      phonenumber: '+380478951258',
    },
    {
      name: 'Joel',
      email: 'sasha@gmail.com',
      phonenumber: '+380478951258',
    },
    {
      name: 'John',
      email: 'sasha@gmail.com',
      phonenumber: '+380478951258',
    },
    {
      name: 'Jillian',
      email: 'sasha@gmail.com',
      phonenumber: '+380478951258',
    },
    {
      name: 'Jimmy',
      email: 'sasha@gmail.com',
      phonenumber: '+380478951258',
    },
    {
      name: 'Julie',
      email: 'sasha@gmail.com',
      phonenumber: '+380478951258',
    },
    {
      name: 'Jillian',
      email: 'sasha@gmail.com',
      phonenumber: '+380478951258',
    },
    {
      name: 'Jimmy',
      email: 'sasha@gmail.com',
      phonenumber: '+380478951258',
    },
    {
      name: 'Julie',
      email: 'sasha@gmail.com',
      phonenumber: '+380478951258',
    },
  ]);
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
    gap: 40,
    paddingHorizontal: 10,
    paddingVertical: 30,
  };

  const onSearch = (searchText: string) => {
    const newFilteredContacts = contacts.filter(({name}) =>
      name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredContacts(newFilteredContacts);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <SearchInput onSearch={onSearch} />
      <ContactList data={filteredContacts} />
    </SafeAreaView>
  );
}

export default Contacts;
