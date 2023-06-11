import * as yup from 'yup';
import {phoneRegExp} from '../constants/regrex';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  name: yup
    .string()
    .min(8, ({min}) => `Name must be at least ${min} characters`)
    .required('Name is required'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
});

export {validationSchema};
