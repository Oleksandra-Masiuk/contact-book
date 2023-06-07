import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ContactCard from './ContactCard';

function Divider(): JSX.Element {
  return <View style={styles.divider} />;
}

function ContactList(): JSX.Element {
  return (
    <View>
      <FlatList
        style={styles.cardList}
        data={[
          {name: 'Devin', email: 'sasha@gmail.com'},
          {name: 'Dan', email: 'sasha@gmail.com'},
          {name: 'Dominic', email: 'sasha@gmail.com'},
          {name: 'Jackson', email: 'sasha@gmail.com'},
          {name: 'James', email: 'sasha@gmail.com'},
          {name: 'Joel', email: 'sasha@gmail.com'},
          {name: 'John', email: 'sasha@gmail.com'},
          {name: 'Jillian', email: 'sasha@gmail.com'},
          {name: 'Jimmy', email: 'sasha@gmail.com'},
          {name: 'Julie', email: 'sasha@gmail.com'},
          {name: 'Jillian', email: 'sasha@gmail.com'},
          {name: 'Jimmy', email: 'sasha@gmail.com'},
          {name: 'Julie', email: 'sasha@gmail.com'},
        ]}
        renderItem={({item}) => <ContactCard item={item} />}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardList: {
    gap: 20,
  },
  divider: {height: 15},
});

export default ContactList;
