import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
} from 'react-native';

import {IconEntypo} from '../../constants/icons';
import ContactList from './ContactList';
import SearchInput from './Search';
import {Contact} from '../../interfaces/Contact';
import {Color} from '../../constants/colors';
import {styles} from '../../styles/cardList';
import {
  alertPermissionDenied,
  getContacts,
  requestContactPermission,
} from '../../services/ContactServise';
import {backgroundStyles} from '../../styles/contacts';
import {AddContactsModal} from '../addContacts/AddContactsModal';

function ContactsSection(): JSX.Element {
  const [contacts, setContacts] = useState([] as Contact[]);
  const [filteredContacts, setFilteredContacts] = useState([] as Contact[]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const loadContacts = async () => {
      try {
        const granted = await requestContactPermission();

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          const data = await getContacts();
          setContacts(data);
          setFilteredContacts(data);
        } else {
          alertPermissionDenied();
        }
      } catch (error) {
        console.error('Permission error: ', error);
      }
    };

    loadContacts();
  }, []);

  const onSearch = (searchText: string) => {
    const newFilteredContacts = contacts.filter(({name}) =>
      name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredContacts(newFilteredContacts);
  };

  const onAddContact = () => setModalVisible(!modalVisible);

  return (
    <SafeAreaView style={backgroundStyles.wrapper}>
      <AddContactsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
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
