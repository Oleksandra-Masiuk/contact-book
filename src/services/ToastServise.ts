import Toast from 'react-native-toast-message';
import {ToastText} from '../enums/toast/toastText';

const successToast = (text: string) =>
  Toast.show({
    type: 'success',
    text1: text,
  });

export {successToast, ToastText};
