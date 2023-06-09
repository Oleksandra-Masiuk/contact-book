import {Alert, PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import {mapContactsArray} from '../helpers/mapContactsArray';
import {ContactsForm} from '../interfaces/ContactsForm';

const requestContactPermission = async () =>
  await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
    {
      title: 'Contacts',
      message: 'This app would like to view and edit your contacts.',
      buttonPositive: 'Accept',
    },
  );

const getContacts = async () => {
  const data = await Contacts.getAll();
  return mapContactsArray(data);
};
const addContact = async ({phone, name, email}: ContactsForm) => {
  const newContact = {
    givenName: name,
    phoneNumbers: [{label: 'mobile', number: phone}],
    emailAddresses: [{label: 'work', email: email}],
  };

  return await Contacts.addContact(newContact as Contacts.Contact);
};

const deleteContactById = async (id: string) => {
  const contact = await Contacts.getContactById(id);

  if (contact) {
    await Contacts.deleteContact(contact);
  }
  return contact;
};

const alertPermissionDenied = () => {
  Alert.alert(
    'Permission Denied',
    'This app requires access to your contacts. Please grant permission in the app settings.',
    [
      {
        text: 'OK',
      },
    ],
  );
};

export {
  requestContactPermission,
  getContacts,
  alertPermissionDenied,
  deleteContactById,
  addContact,
};
