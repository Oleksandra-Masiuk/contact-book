import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from './styles';
import {Color} from '../../constants/colors';
import {Contact} from '../../interfaces/Contact';
import {getImageObject} from '../../helpers/getImageObject';
import {IconEntypo, Ionicon} from '../../constants/icons';
import {contactActionCreator} from '../../store/actions';
import {useAppDispatch} from '../../hooks';

export type RootStackParamList = {
  Contacts: undefined;
  ContactInfo: {item: Contact};
};

const ContactsInfo: React.FC<StackScreenProps<RootStackParamList>> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const route = useRoute<RouteProp<RootStackParamList, 'ContactInfo'>>();
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  const {item} = route?.params;

  const makePhoneCall = () => {
    Linking.openURL(`tel:${item?.phoneNumber}`);
  };

  const onDelete = () => {
    const removeContact = async () => {
      try {
        dispatch(contactActionCreator.deleteContact(item?.id));
        navigation.navigate('Contacts');
      } catch (error) {
        console.log('Error while removing contact:', error);
      }
    };
    removeContact();
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.contactInfoWrapper}>
        <Image style={styles.image} source={getImageObject(item?.image)} />
        <View style={styles.contactInfoRowsWrapper}>
          <View>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.info}>{item?.name}</Text>
          </View>
          <View>
            <Text style={styles.label}>Phone number</Text>
            <Text style={styles.info}>{item?.phoneNumber}</Text>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={makePhoneCall}>
            <Ionicon name="call" size={22} color={Color.SMALL_GREY} />
            <Text style={styles.buttonText}>CALL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onDelete}>
            <IconEntypo name="cross" size={22} color={Color.SMALL_GREY} />
            <Text style={styles.buttonText}>DELETE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContactsInfo;
