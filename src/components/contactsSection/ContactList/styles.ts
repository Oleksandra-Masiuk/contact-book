import {StyleSheet} from 'react-native';
import {Color} from '../../../constants/colors';
import {FontSize} from '../../../constants/fontSize';

const styles = StyleSheet.create({
  cardList: {
    gap: 20,
    flex: 1,
  },
  divider: {height: 15},
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
    marginLeft: 'auto',
  },
  noContactsText: {
    alignSelf: 'center',
    fontSize: FontSize.BIG,
    color: Color.DARK_GREY,
  },
});

export {styles};
