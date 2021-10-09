import React from 'react';
import { Formik, Form } from 'formik';
import { TextInput } from 'components/TextInput/TextInput';

const RegisterForm = () => {

  const validate = values => {
      const errors = {};

  if (!values.name) {
      errors.name = 'Required'
    } 

    if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
    if (!values.password) {
      errors.password = 'Required'
    } else if (values.password.length < 3 || values.password.length > 15) {
       errors.password = 'Incorrect password. Please, try again'
      }
    
    if (!values.repeatePassword) {
      errors.repeatPassword = 'Required'
    } else if (values.password !== values.repeatPassword) {
       errors.repeatPassword = 'Incorrect password. Please, try again'
    }
      
   return errors;
 };

    const initialValues = {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',

  };

  return (
    <Formik
      initialValues={{ initialValues }}
      validate={{ validate }}
      onSubmit={ values => {
          alert(JSON.stringify(values, null, 2));
          initialValues.name = '';
          initialValues.email = '';
          initialValues.password = '';
          initialValues.repeatPassword = '';
   }}
    >
          <Form>
              <TextInput
             label="Your name"
             name="name"
             type="text"
             placeholder="Sara"/>
        <TextInput
             label="Email Address"
             name="email"
             type="email"
             placeholder="sara@mail.com"/>
        <TextInput
          label="Your password"
          name="password"
          type="password"
              />
              <TextInput
          label="Repeat your password"
          name="repeatPassword"
          type="password"
        />
         <button disabled={!validate}  type="submit">Submit</button>
      </Form>

    </Formik>
  );
};

export { RegisterForm };