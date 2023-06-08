import {StyleSheet} from 'react-native';
import {Color} from '../constants/colors';
import {FontSize} from '../constants/fontSize';

const styles = StyleSheet.create({
  image: {width: 120, height: 120, alignSelf: 'center'},
  contactInfoWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 30,
    gap: 30,
  },
  label: {
    fontSize: FontSize.SMALL,
    color: Color.DARK_GREY,
  },
  info: {fontSize: FontSize.BIG, color: Color.DARK_GREY},
  buttonText: {
    fontSize: FontSize.MEDIUM,
  },
  button: {
    backgroundColor: Color.BACKGROUND_GREY,
    paddingVertical: 8,
    width: 130,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 50,
    gap: 6,
  },
  buttonWrapper: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

export {styles};
