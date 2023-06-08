import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconInfo from 'react-native-vector-icons/Feather';
import {Color} from '../constants/colors';
import {FontSize} from '../constants/fontSize';
import {Contact} from '../interfaces/Contact';

interface ContactCardProps {
  item: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({item}) => {
  const {name, email} = item;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ContactInfo', {item});
      }}>
      <View style={styles.cardWrapper}>
        <Icon
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

const styles = StyleSheet.create({
  cardWrapper: {
    padding: 10,
    paddingLeft: 20,
    flexDirection: 'row',
    backgroundColor: Color.BACKGROUND_GREY,
    alignItems: 'center',
  },
  name: {
    color: Color.DARK_GREY,
    fontSize: FontSize.MEDIUM,
    fontWeight: 'bold',
  },
  email: {
    color: Color.LIGHT_GREY,
    fontSize: 14,
    marginTop: 2,
  },
  icon: {marginRight: 20},
  textWrapper: {
    marginRight: 'auto',
  },
});

export default ContactCard;
