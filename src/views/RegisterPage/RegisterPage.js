import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './RegisterPage.module.css';
//import { MyTextInput } from 'components/MyTextInput/MyTextInput';


const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Min 6 symbols')
    .max(20, 'Max 15 symbols')
        .required('Required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
  
});

const RegisterPage = () => {
    return (
    <Formik
      initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
      validate={{ validationSchema }}
        onSubmit={(values, {setSubmitting}) => {
        // dispatch(authOperations.register({ name, email, password }));
        // initialValues.email = '';
        // initialValues.password = '';
         console.log(values);
        setSubmitting(false);

   }}
    >
        <Form className={ s.form}>
        <label htmlFor="name">Name</label>
          <Field name="name" type="text" placeholder="Sara" className={ s.input}/>
          <ErrorMessage name="name" />
          
        <label htmlFor="email">Email</label>
         <Field name="email" type="email" placeholder="jane@formik.com"/>
          <ErrorMessage name="email" />
        {/* <MyTextInput
             label="Email Address"
             name="email"
             type="email"
             placeholder="jane@formik.com"/> */}
          <label htmlFor="password">Password</label>
         <Field name="password" type="password"/>
          <ErrorMessage name="password" />
        {/* <MyTextInput
          label="Your password"
          name="password"
          type="password"
                /> */}
           <label htmlFor="confirmPassword">Confirm your password</label>
         <Field name="confirmPassword" type="password"/>
          <ErrorMessage name="confirmPassword" />
                {/* <MyTextInput
          label="Confirm your password"
          name="confirmPassword"
          type="password"/> */}

                <button type="submit">Submit</button>
      </Form>

    </Formik>
  );
};

export default RegisterPage ;
