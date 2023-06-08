import React from 'react';
import {FlatList, View} from 'react-native';
import ContactCard from './ContactCard';
import {styles} from '../styles/cardList';

function Divider(): JSX.Element {
  return <View style={styles.divider} />;
}

function ContactList(): JSX.Element {
  return (
    <View>
      <FlatList
        style={styles.cardList}
        data={[
          {
            name: 'Devin',
            email: 'sasha@gmail.com',
            phonenumber: '+380478951258',
          },
          {name: 'Dan', email: 'sasha@gmail.com', phonenumber: '+380478951258'},
          {
            name: 'Dominic',
            email: 'sasha@gmail.com',
            phonenumber: '+380478951258',
          },
          {
            name: 'Jackson',
            email: 'sasha@gmail.com',
            phonenumber: '+380478951258',
          },
          {
            name: 'James',
            email: 'sasha@gmail.com',
            phonenumber: '+380478951258',
          },
          {
            name: 'Joel',
            email: 'sasha@gmail.com',
            phonenumber: '+380478951258',
          },
          {
            name: 'John',
            email: 'sasha@gmail.com',
            phonenumber: '+380478951258',
          },
          {
            name: 'Jillian',
            email: 'sasha@gmail.com',
            phonenumber: '+380478951258',
          },
          {
            name: 'Jimmy',
            email: 'sasha@gmail.com',
            phonenumber: '+380478951258',
          },
          {
            name: 'Julie',
            email: 'sasha@gmail.com',
            phonenumber: '+380478951258',
          },
          {
            name: 'Jillian',
            email: 'sasha@gmail.com',
            phonenumber: '+380478951258',
          },
          {
            name: 'Jimmy',
            email: 'sasha@gmail.com',
            phonenumber: '+380478951258',
          },
          {
            name: 'Julie',
            email: 'sasha@gmail.com',
            phonenumber: '+380478951258',
          },
        ]}
        renderItem={({item}) => <ContactCard item={item} />}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
}

export default ContactList;
