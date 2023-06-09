import {StyleSheet} from 'react-native';
import {Color} from '../constants/colors';
import {FontSize} from '../constants/fontSize';

const styles = StyleSheet.create({
  cardWrapper: {
    padding: 10,
    paddingLeft: 20,
    flexDirection: 'row',
    backgroundColor: Color.BACKGROUND_GREY,
    alignItems: 'center',
  },
  name: {
    color: Color.DARK_GREY,
    fontSize: FontSize.MEDIUM,
    fontWeight: 'bold',
  },
  email: {
    color: Color.LIGHT_GREY,
    fontSize: 14,
    marginTop: 2,
  },
  icon: {marginRight: 20},
  textWrapper: {
    marginRight: 'auto',
  },
});

export {styles};
