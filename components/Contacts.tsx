import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  PermissionsAndroid,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import Contacts from 'react-native-contacts';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import IconEntypo from 'react-native-vector-icons/Entypo';

import ContactList from './ContactList';
import SearchInput from './Search';
import {Contact} from './ContactCard';
import {mapContactsArray} from '../helpers/mapContactsArray';
import {Color} from '../constants/colors';
import {styles} from '../styles/cardList';

function ContactsSection(): JSX.Element {
  const [contacts, setContacts] = useState([] as Contact[]);
  const [filteredContacts, setFilteredContacts] = useState([] as Contact[]);

  useEffect(() => {
    const requestContactPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
          {
            title: 'Contacts',
            message: 'This app would like to view and edit your contacts.',
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

  const onAddContact = () => {};

  return (
    <SafeAreaView style={backgroundStyle}>
      <SearchInput onSearch={onSearch} />
      <TouchableOpacity style={styles.button} onPress={onAddContact}>
        <IconEntypo name="plus" size={22} color={Color.SMALL_GREY} />
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
      <ContactList data={filteredContacts} />
    </SafeAreaView>
  );
}

export default ContactsSection;
