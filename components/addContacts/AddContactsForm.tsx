import React, {useState} from 'react';
import {View, TextInput, Button, Image} from 'react-native';
import Contacts from 'react-native-contacts';
import {launchImageLibrary} from 'react-native-image-picker';

const AddContactsForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState<string | undefined>();

  const handleImagePicker = async () => {
    await launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel) {
        setImage(response.assets?.[0]?.uri);
      }
    });
  };

  const saveContact = async () => {
    try {
      const newContact = {
        displayName: name,
        phoneNumbers: [{label: 'mobile', number: phoneNumber}],
        emailAddresses: [{label: 'work', email: email}],
        thumbnailPath: image ? image : undefined,
      };
      console.log(newContact);

      await Contacts.addContact(newContact as Contacts.Contact);
    } catch (error) {
      console.log('Error while saving contact:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Button title="Add Image" onPress={handleImagePicker} />
      {image && (
        <Image source={{uri: image}} style={{width: 100, height: 100}} />
      )}
      <Button title="Save Contact" onPress={saveContact} />
    </View>
  );
};

export {AddContactsForm};
