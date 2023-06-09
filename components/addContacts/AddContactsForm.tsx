import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';

import {styles as contactInfoStyles} from '../../styles/contactInfo';
import {styles} from '../../styles/addForm';
import {validationSchema} from '../../constants/validationSchemas';
import {addContact} from '../../services/ContactServise';
import {ContactsForm} from '../../interfaces/ContactsForm';

interface AddContactsFormProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddContactsForm: React.FC<AddContactsFormProps> = ({setModalVisible}) => {
  const saveContact = async (data: ContactsForm) => {
    try {
      await addContact(data);
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
