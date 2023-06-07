import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <Icon style={styles.icon} name="search" size={22} />
      <TextInput
        style={styles.input}
        placeholder={'Search'}
        onChangeText={handleSearch}
        value={searchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    position: 'relative',
    height: 40,
  },
  icon: {
    position: 'absolute',
    top: 8,
    left: 8,
    color: '#444547',
  },
  input: {
    flex: 1,
    borderColor: '#444547',
    borderWidth: 2,
    padding: 10,
    paddingLeft: 30,
    borderRadius: 50,
    fontSize: 18,
  },
});

export default SearchInput;
