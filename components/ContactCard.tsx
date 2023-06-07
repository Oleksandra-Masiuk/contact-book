import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconInfo from 'react-native-vector-icons/Feather';

interface Contact {
  name: string;
  email?: string;
}

interface ContactCardProps {
  item: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({item}) => {
  const {name, email} = item;
  return (
    <View style={styles.cardWrapper}>
      <Icon
        style={styles.icon}
        name="perm-contact-cal"
        size={30}
        color="#606060"
      />
      <View style={styles.textWrapper}>
        <Text style={styles.name}>{name}</Text>
        {email && <Text style={styles.email}>{email}</Text>}
      </View>
      <IconInfo name="info" size={16} color="#606060" />
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    padding: 10,
    paddingLeft: 20,
    flexDirection: 'row',
    backgroundColor: '#e7e9f4',
    alignItems: 'center',
  },
  name: {
    color: '#444547',
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: '#85878b',
    fontSize: 14,
    marginTop: 2,
  },
  icon: {marginRight: 20},
  textWrapper: {
    marginRight: 'auto',
  },
});

export default ContactCard;
