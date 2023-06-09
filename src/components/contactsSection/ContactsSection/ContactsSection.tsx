import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
} from 'react-native';

import ContactList from '../ContactList/ContactList';
import SearchInput from '../Search/Search';
import {Contact} from '../../../interfaces/Contact';
import {AddContactsModal} from '../../addContacts/AddContactsModal/AddContactsModal';
import {
  alertPermissionDenied,
  requestContactPermission,
} from '../../../services/ContactServise';
import {contactActionCreator} from '../../../store/actions';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {IconEntypo} from '../../../constants/icons';
import {Color} from '../../../constants/colors';
import {styles} from '../ContactList/styles';
import {styles as backgroundStyles} from './styles';

function ContactsSection(): JSX.Element {
  const [filteredContacts, setFilteredContacts] = useState([] as Contact[]);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useAppDispatch();

  const {contacts} = useAppSelector(state => ({
    contacts: state.contacts.contacts,
  }));

  useEffect(() => {
    const loadContacts = async () => {
      try {
        const granted = await requestContactPermission();

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          dispatch(contactActionCreator.loadContacts());
        } else {
          alertPermissionDenied();
        }
      } catch (error) {
        console.error('Permission error: ', error);
      }
    };

    loadContacts();
  }, [dispatch]);

  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);

  const onSearch = (searchText: string) => {
    const newFilteredContacts = contacts.filter(({name}: {name: string}) =>
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
