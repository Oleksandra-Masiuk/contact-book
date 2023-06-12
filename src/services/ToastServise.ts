import Toast from 'react-native-toast-message';
import {ToastText} from '../enums/toast/toastText';
import {ToastStatus} from '../enums/toast/toastStatus';

const successToast = (text: string) =>
  Toast.show({
    type: ToastStatus.SUCCESS,
    text1: text,
  });

export {successToast, ToastText};
