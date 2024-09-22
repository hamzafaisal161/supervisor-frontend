import * as yup from 'yup';

export const formSchema = yup.object({
  firstName: yup
    .string()
    .matches(/^[A-Za-z]+$/, 'First Name must contain only characters')
    .min(2, 'First Name must be at least 2 characters')
    .required('First Name is Required'),
  lastName: yup
    .string()
    .matches(/^[A-Za-z]+$/, 'Last Name must contain only characters')
    .min(2, 'Last Name must be at least 2 characters')
    .required('Last Name is Required'),
  email: yup.string().email(),
  phoneNumber: yup.string(),
  supervisor: yup.object({
    label: yup.string().required(),
  }),
});
