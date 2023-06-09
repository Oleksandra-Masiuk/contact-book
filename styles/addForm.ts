import {StyleSheet} from 'react-native';
import {Color} from '../constants/colors';
import {FontSize} from '../constants/fontSize';

const styles = StyleSheet.create({
  contactForm: {
    gap: 6,
  },
  contactFormWrapper: {
    gap: 30,
  },
  input: {
    fontSize: FontSize.BIG,
    color: Color.DARK_GREY,
    borderBottomColor: Color.LIGHT_GREY,
    borderBottomWidth: 0.5,
  },
  button: {
    alignSelf: 'center',
  },
  error: {
    color: 'red',
    fontSize: FontSize.SMALL,
  },
});

export {styles};
