import React from 'react';
import {Modal, View, TouchableOpacity} from 'react-native';

import {IconEntypo} from '../../constants/icons';
import {styles as contactInfoStyles} from '../../styles/contactInfo';
import {Color} from '../../constants/colors';
import {styles} from '../../styles/contactModal';
import {AddContactsForm} from './AddContactsForm';

interface AddContactsModalProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddContactsModal: React.FC<AddContactsModalProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  const onClose = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <Modal animationType="none" visible={modalVisible} onRequestClose={onClose}>
      <View style={styles.modalWrapper}>
        <TouchableOpacity
          style={[contactInfoStyles.button, styles.buttonClose]}
          onPress={onClose}>
          <IconEntypo name="cross" size={22} color={Color.SMALL_GREY} />
        </TouchableOpacity>
        <AddContactsForm setModalVisible={setModalVisible} />
      </View>
    </Modal>
  );
};

export {AddContactsModal};
