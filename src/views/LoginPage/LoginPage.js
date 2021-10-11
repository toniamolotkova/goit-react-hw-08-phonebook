import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from 'components/MyTextInput/MyTextInput';
import { isValidElement } from 'react';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Min 6 symbols')
    .max(20, 'Max 15 symbols')
    .required('Required'),
});

const LoginPage = () => {
    return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={{ validationSchema }}
            onSubmit={(values, {setSubmitting}) => {
        // dispatch(authOperations.register({ name, email, password }));
        // initialValues.email = '';
        // initialValues.password = '';
         console.log(values);
        setSubmitting(false);

   }}
    >
      <Form>
        <MyTextInput
             label="Email Address"
             name="email"
             type="email"
             placeholder="jane@formik.com"/>
        <MyTextInput
          label="Your password"
          name="password"
          type="password"
        />
         <button disabled={!isValidElement}  type="submit">Submit</button>
      </Form>

    </Formik>
  );
};

export default LoginPage;


