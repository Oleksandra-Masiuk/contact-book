import React from 'react';
import {FlatList, Text, View} from 'react-native';
import ContactCard from './ContactCard';
import {styles} from '../../styles/cardList';
import {Contact} from '../../interfaces/Contact';

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
        <View>
          <FlatList
            style={styles.cardList}
            data={data}
            renderItem={({item}) => <ContactCard item={item} />}
            ItemSeparatorComponent={Divider}
          />
        </View>
      ) : (
        <View>
          <Text style={styles?.noContactsText}>No contacts found</Text>
        </View>
      )}
    </>
  );
};

export default ContactList;
