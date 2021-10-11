import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import s from './Registration.module.css';
import { MyTextInput } from 'components/MyTextInput/MyTextInput';
import authOperations from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';


const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Min 8 symbols')
    .max(20, 'Max 15 symbols')
        .required('Required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
  
});

const Registration = () => {
  const dispatch = useDispatch();


  const INITIAL_VALUES = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const handleSubmit = useCallback((values, { setSubmitting }) => {
    const { name, email, password } = values;
    dispatch(authOperations.register({name, email, password}));
    console.log(values)
    setSubmitting(false);
  }, [dispatch])

    return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      >
          <Form className={s.form}>
          <MyTextInput
          label="Your name"
          name="name"
          type="text"
          placeholder="Sara"/>
        
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
    
                <MyTextInput
          label="Confirm your password"
          name="confirmPassword"
          type="password"/>

            <button type="submit">Submit</button>
      </Form>
    
        

    </Formik>
  );
};

export default Registration ;
