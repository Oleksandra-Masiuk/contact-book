import React from 'react';
import {FlatList, Text, View} from 'react-native';

import ContactCard from '../ContactCard/ContactCard';
import {Contact} from '../../../interfaces/Contact';
import {styles} from './styles';

interface ContactListProps {
  data: Contact[];
}

function Divider(): JSX.Element {
  return <View style={styles.divider} />;
}

const ContactList: React.FC<ContactListProps> = ({data}) => {
  return (
    <>
      {data?.length > 0 ? (
        <FlatList
          style={styles.cardList}
          data={data}
          renderItem={({item}) => <ContactCard item={item} />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Divider}
        />
      ) : (
        <View>
          <Text style={styles?.noContactsText}>No contacts found</Text>
        </View>
      )}
    </>
  );
};

export default ContactList;
