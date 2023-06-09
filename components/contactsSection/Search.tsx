import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

import {Ionicon} from '../../constants/icons';
import {styles} from '../../styles/search';

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: string) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={styles?.searchWrapper}>
      <Ionicon style={styles.icon} name="search" size={22} />
      <TextInput
        style={styles.input}
        placeholder={'Search'}
        onChangeText={handleSearch}
        value={searchText}
      />
    </View>
  );
};

export default SearchInput;
