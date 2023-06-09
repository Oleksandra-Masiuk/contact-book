import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Color} from '../../constants/colors';
import {Contact} from '../../interfaces/Contact';
import {IconInfo, MaterialIcon} from '../../constants/icons';
import {styles} from '../../styles/contactCard';

interface ContactCardProps {
  item: Contact;
}

type ContactsStackParamList = {
  Contacts: undefined;
  ContactInfo: {item: Contact};
};

const ContactCard: React.FC<ContactCardProps> = ({item}) => {
  const {name, email} = item;
  const navigation =
    useNavigation<StackNavigationProp<ContactsStackParamList, 'Contacts'>>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ContactInfo', {item});
      }}>
      <View style={styles.cardWrapper}>
        <MaterialIcon
          style={styles.icon}
          name="perm-contact-cal"
          size={30}
          color={Color.SMALL_GREY}
        />
        <View style={styles.textWrapper}>
          <Text style={styles.name}>{name}</Text>
          {email && <Text style={styles.email}>{email}</Text>}
        </View>
        <IconInfo name="info" size={16} color={Color.SMALL_GREY} />
      </View>
    </TouchableOpacity>
  );
};

export default ContactCard;
