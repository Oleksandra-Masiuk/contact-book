import React from 'react';
import {FlatList, View} from 'react-native';
import ContactCard, {Contact} from './ContactCard';
import {styles} from '../styles/cardList';

interface ContactListProps {
  data: Contact[];
}

function Divider(): JSX.Element {
  return <View style={styles.divider} />;
}

const ContactList: React.FC<ContactListProps> = ({data}) => {
  return (
    <View>
      <FlatList
        style={styles.cardList}
        data={data}
        renderItem={({item}) => <ContactCard item={item} />}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
};

export default ContactList;
