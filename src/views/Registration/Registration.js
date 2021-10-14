import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import s from './Registration.module.css';
import { MyTextInput } from 'components/MyTextInput/MyTextInput';
import authOperations from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Min 8 symbols')
    .max(20, 'Max 15 symbols')
        .required('Required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')
  
});

const Registration = () => {
  const dispatch = useDispatch();


  const INITIAL_VALUES = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const handleSubmit = useCallback( async (values, { setSubmitting, resetForm }) => {
    const { name, email, password } = values;
    try {
      await dispatch(authOperations.register({name, email, password}));
    } catch (error){
                if (error.message === 400) {
                  toast.error('Incorrect password or login');
      }
    }
    
    console.log(values)
    setSubmitting(false);
    resetForm({values: ''})
  }, [dispatch])

    return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className={s.form}>
          <MyTextInput
          label="Your name"
          name="name"
          type="text"
          placeholder="Sara"/>
        
        <MyTextInput
             label="Your email"
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

            <button className={ s.btn} type="submit" disabled={!(formik.dirty && formik.isValid)}>Submit</button>
      </Form>
        ) }
    </Formik>
  );
};

export default Registration ;
