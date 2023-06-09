import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';

import {styles as contactInfoStyles} from '../../ContactsInfo/styles';
import {validationSchema} from '../../../validation-schemas/validationSchemas';
import {ContactsForm} from '../../../interfaces/ContactsForm';
import {contactActionCreator} from '../../../store/actions';
import {useAppDispatch} from '../../../hooks';
import {styles} from './styles';
import {ToastText, successToast} from '../../../services/ToastServise';

interface AddContactsFormProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddContactsForm: React.FC<AddContactsFormProps> = ({setModalVisible}) => {
  const dispatch = useAppDispatch();
  const saveContact = async (data: ContactsForm) => {
    try {
      dispatch(contactActionCreator.createContact(data));
      setModalVisible(false);
      successToast(ToastText.ADD_SUCCESS);
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

              {Boolean(errors.name) && (
                <Text style={styles.error}>{errors.name}</Text>
              )}
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
              {Boolean(errors.email) && (
                <Text style={styles.error}>{errors.email}</Text>
              )}
            </View>
            <View>
              <TextInput
                placeholder="Phone number"
                style={styles.input}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
              />

              {Boolean(errors.phone) && (
                <Text style={styles.error}>{errors.phone}</Text>
              )}
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
