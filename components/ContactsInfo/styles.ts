import {StyleSheet} from 'react-native';
import {Color} from '../../constants/colors';
import {FontSize} from '../../constants/fontSize';

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
  info: {
    fontSize: FontSize.BIG,
    color: Color.DARK_GREY,
    borderBottomColor: Color.LIGHT_GREY,
    borderBottomWidth: 0.5,
    paddingVertical: 1,
  },
  buttonText: {
    fontSize: FontSize.MEDIUM,
  },
  button: {
    backgroundColor: Color.BACKGROUND_GREY,
    paddingVertical: 8,
    width: 130,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    gap: 6,
  },
  buttonWrapper: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  contactInfoRowsWrapper: {
    gap: 10,
  },
});

export {styles};
