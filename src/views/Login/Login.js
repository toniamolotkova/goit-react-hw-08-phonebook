import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from 'components/MyTextInput/MyTextInput';
//import { isValidElement } from 'react';
import authOperations from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Min 8 symbols')
    .max(20, 'Max 15 symbols')
    .required('Required'),
});

const Login = () => {
  const dispatch = useDispatch();

    return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const { email, password } = values;

        dispatch(authOperations.logIn({ email, password }));
          setSubmitting(false);


   }}
    >
        <Form >
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
         <button type="submit">Submit</button>
      </Form>

    </Formik>
  );
};

export default Login;


