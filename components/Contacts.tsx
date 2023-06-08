import React, {useEffect, useState} from 'react';
import {SafeAreaView, PermissionsAndroid, Alert} from 'react-native';
import Contacts from 'react-native-contacts';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import ContactList from './ContactList';
import SearchInput from './Search';
import {Contact} from './ContactCard';
import {mapContactsArray} from '../helpers/mapContactsArray';

function ContactsSection(): JSX.Element {
  const [contacts, setContacts] = useState([] as Contact[]);
  const [filteredContacts, setFilteredContacts] = useState([] as Contact[]);

  useEffect(() => {
    const requestContactPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Accept',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          const data = await Contacts.getAll();
          const mappedData = mapContactsArray(data);
          setContacts(mappedData);
          setFilteredContacts(mappedData);
        } else {
          Alert.alert(
            'Permission Denied',
            'This app requires access to your contacts. Please grant permission in the app settings.',
            [
              {
                text: 'OK',
              },
            ],
          );
        }
      } catch (error) {
        console.error('Permission error: ', error);
      }
    };

    requestContactPermission();
  }, []);

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

export default ContactsSection;
const array: Contact[] = [
  {
    name: 'Devin',
    email: 'sasha@gmail.com',
    phoneNumber: '+380478951258',
  },
  {name: 'Dan', email: 'sasha@gmail.com', phoneNumber: '+380478951258'},
  {
    name: 'Dominic',
    email: 'sasha@gmail.com',
    phoneNumber: '+380478951258',
  },
  {
    name: 'Jackson',
    email: 'sasha@gmail.com',
    phoneNumber: '+380478951258',
  },
  {
    name: 'James',
    email: 'sasha@gmail.com',
    phoneNumber: '+380478951258',
  },
  {
    name: 'Joel',
    email: 'sasha@gmail.com',
    phoneNumber: '+380478951258',
  },
  {
    name: 'John',
    email: 'sasha@gmail.com',
    phoneNumber: '+380478951258',
  },
  {
    name: 'Jillian',
    email: 'sasha@gmail.com',
    phoneNumber: '+380478951258',
  },
  {
    name: 'Jimmy',
    email: 'sasha@gmail.com',
    phoneNumber: '+380478951258',
  },
  {
    name: 'Julie',
    email: 'sasha@gmail.com',
    phoneNumber: '+380478951258',
  },
  {
    name: 'Jillian',
    email: 'sasha@gmail.com',
    phoneNumber: '+380478951258',
  },
  {
    name: 'Jimmy',
    email: 'sasha@gmail.com',
    phoneNumber: '+380478951258',
  },
  {
    name: 'Julie',
    email: 'sasha@gmail.com',
    phoneNumber: '+380478951258',
  },
];
