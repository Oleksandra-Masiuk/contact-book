import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {RouteProp, NavigationProp} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';

import {styles} from '../styles/contactInfo';
import {Color} from '../constants/colors';
import {Contact} from '../interfaces/Contact';
import {getImageObject} from '../helpers/getImageObject';
import {deleteContactById} from '../services/ContactServise';

type RootStackParamList = {
  Contacts: undefined;
  ContactInfo: {item: Contact};
};

interface ContactsInfoProps {
  route: RouteProp<RootStackParamList, 'ContactInfo'>;
  navigation: NavigationProp<RootStackParamList, 'ContactInfo'>;
}

const ContactsInfo: React.FC<ContactsInfoProps> = ({route, navigation}) => {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  const {name, phoneNumber, image, id} = route?.params?.item;

  const makePhoneCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const onDelete = () => {
    const removeContact = async () => {
      try {
        const contact = await deleteContactById(id);
        if (contact) {
          navigation.navigate('Contacts');
        }
      } catch (error) {
        console.log('Error while removing contact:', error);
      }
    };
    removeContact();
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.contactInfoWrapper}>
        <Image style={styles.image} source={getImageObject(image)} />
        <View style={styles.contactInfoRowsWrapper}>
          <View>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.info}>{name}</Text>
          </View>
          <View>
            <Text style={styles.label}>Phone number</Text>
            <Text style={styles.info}>{phoneNumber}</Text>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={makePhoneCall}>
            <Icon name="call" size={22} color={Color.SMALL_GREY} />
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
