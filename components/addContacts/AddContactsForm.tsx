import React from 'react';
import {View, TextInput, Text} from 'react-native';
import Contacts from 'react-native-contacts';
import {Formik} from 'formik';
import * as yup from 'yup';

import {styles as contactInfoStyles} from '../../styles/contactInfo';
import {TouchableOpacity} from 'react-native';
import {styles} from '../../styles/addForm';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  name: yup
    .string()
    .min(8, ({min}) => `Name must be at least ${min} characters`)
    .required('Name is required'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
});

interface AddContactsFormProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ContactsForm {
  phone: string;
  name: string;
  email: string;
}

const AddContactsForm: React.FC<AddContactsFormProps> = ({setModalVisible}) => {
  const saveContact = async ({phone, name, email}: ContactsForm) => {
    try {
      const newContact = {
        givenName: name,
        phoneNumbers: [{label: 'mobile', number: phone}],
        emailAddresses: [{label: 'work', email: email}],
      };

      await Contacts.addContact(newContact as Contacts.Contact);
      setModalVisible(false);
    } catch (error) {
      console.log('Error while saving contact:', error);
    }
  };

  return (
    <View style={styles.contactFormWrapper}>
      <Formik
        initialValues={{email: '', name: '', phone: ''}}
        validationSchema={validationSchema}
        onSubmit={saveContact}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View>
              <TextInput
                placeholder="Name"
                style={styles.input}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />

              {errors.name && <Text style={styles.error}>{errors.name}</Text>}
            </View>
            <View>
              <TextInput
                placeholder="Email Address"
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            </View>
            <View>
              <TextInput
                placeholder="Phone number"
                style={styles.input}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
              />

              {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
            </View>
            <TouchableOpacity
              disabled={!isValid}
              style={[contactInfoStyles.button, styles.button]}
              onPress={handleSubmit}>
              <Text style={contactInfoStyles.buttonText}>SAVE</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export {AddContactsForm};
