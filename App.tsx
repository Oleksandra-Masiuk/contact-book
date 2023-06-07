import React from 'react';
import {SafeAreaView} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ContactList from './components/ContactList';
import SearchInput from './components/Search';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <SearchInput onSearch={() => {}} />
      <ContactList />
    </SafeAreaView>
  );
}

export default App;
