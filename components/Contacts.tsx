import React from 'react';
import {SafeAreaView} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ContactList from './ContactList';
import SearchInput from './Search';

function Contacts(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
    gap: 40,
    paddingHorizontal: 10,
    paddingVertical: 30,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <SearchInput
        onSearch={text => {
          console.log(text);
        }}
      />
      <ContactList />
    </SafeAreaView>
  );
}

export default Contacts;
