import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from '../styles/contactInfo';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {Color} from '../constants/colors';
import {RouteProp, NavigationProp} from '@react-navigation/native';
import {Contact} from './ContactCard';

type RootStackParamList = {
  Contacts: undefined;
  ContactInfo: {item: Contact};
};

type ContactsInfoProps = {
  route: RouteProp<RootStackParamList, 'ContactInfo'>;
  navigation: NavigationProp<RootStackParamList, 'ContactInfo'>;
};

const ContactsInfo: React.FC<ContactsInfoProps> = ({route, navigation}) => {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  const {name, phonenumber, image} = route?.params?.item;

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.contactInfoWrapper}>
        <Image
          style={styles.image}
          source={require('../assets/user-profile.png')}
        />
        <View>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.info}>{name}</Text>
          <Text style={styles.label}>Phone number</Text>
          <Text style={styles.info}>{phonenumber}</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
            <Icon name="call" size={22} color={Color.SMALL_GREY} />
            <Text style={styles.buttonText}>CALL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <IconEntypo name="cross" size={22} color={Color.SMALL_GREY} />
            <Text style={styles.buttonText}>DELETE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContactsInfo;
