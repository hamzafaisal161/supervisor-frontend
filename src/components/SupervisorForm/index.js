import { useCallback, useState } from 'react';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { formSchema } from 'schema/supervisorFormSchema';

import { CustomSelect } from 'components';
import { FORM_INTIAL_VALUES } from 'constants/supervisorFormConstants';

const SupervisorForm = () => {
  const [isEmailSelected, setIsEmailSelected] = useState(false);
  const [isPhoneSelected, setIsPhoneSelected] = useState(false);
  const handleSubmit = useCallback((values) => {
    if (!values.email) {
      delete values.email;
    }

    if (!values.phoneNumber) {
      delete values.phoneNumber;
    }

    console.log(values);
    axios.post('http://10.11.13.197:8080/api/submit', values);
  }, []);

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={FORM_INTIAL_VALUES}
      validationSchema={formSchema}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, isValid, dirty: isDirty }) => (
        <Form className="max-w-lg mx-auto mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="mb-4 lg:col-span-1">
              <label htmlFor="firstName" className="block font-bold mb-1">
                First Name*
              </label>
              <Field
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
              {errors?.firstName && <span className="text-red-500">{errors?.firstName}</span>}
            </div>
            <div className="mb-4 lg:col-span-1">
              <label htmlFor="lastName" className="block font-bold mb-1">
                Last Name*
              </label>
              <Field
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
              {errors?.lastName && <span className="text-red-500">{errors?.lastName}</span>}
            </div>
          </div>

          <div className="mb-4 text-lg font-bold">How would you prefer to be notified?</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="mb-4">
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <label htmlFor="email" className="block font-bold mb-1">
                  Email
                </label>
                <input type="checkbox" onClick={() => setIsEmailSelected(!isEmailSelected)} />
              </div>
              <Field
                id="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                disabled={!isEmailSelected}
              />
              {errors?.email && <span className="text-red-500">{errors?.email}</span>}
            </div>
            <div className="mb-4">
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <label htmlFor="phoneNumber" className="block font-bold mb-1">
                  Phone Number
                </label>
                <input type="checkbox" onClick={() => setIsPhoneSelected(!isPhoneSelected)} />
              </div>
              <Field
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                disabled={!isPhoneSelected}
              />
              {errors?.phoneNumber && <span className="text-red-500">{errors?.phoneNumber}</span>}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="supervisor" className="block font-bold mb-1">
              Supervisor
            </label>
            <Field component={CustomSelect} id="supervisor" name="supervisor" />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                !isDirty || !isValid ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={!isDirty || !isValid}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SupervisorForm;
