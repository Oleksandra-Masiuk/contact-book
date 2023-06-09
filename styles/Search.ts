import {StyleSheet} from 'react-native';
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

export {styles};
