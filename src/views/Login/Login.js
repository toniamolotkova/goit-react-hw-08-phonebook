import React from 'react';
import { Formik, Form } from 'formik';
import { TextInput } from 'components/TextInput/TextInput';

const Login = () => {

  const validate = values => {
    const errors = {};
    if (!values.password) {
      errors.password = 'Required'
    } else if (values.password.length < 3 || values.password.length > 15) {
       errors.password = 'Incorrect password. Please, try again'
    }
  
   if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
 
   return errors;
 };

  const initialValues = {
      email: '',
      password: '',
  };

  //   validate,
  //   onSubmit: values => {
  //    alert(JSON.stringify(values, null, 2));
  //   },
  // });
  return (
    <Formik
      initialValues={{ initialValues }}
      validate={{ validate }}
      onSubmit={ values => {
        alert(JSON.stringify(values, null, 2));
        initialValues.email = '';
        initialValues.password = '';

   }}
    >
      <Form>
        {/* <label htmlFor="email">Email Address</label> */}
        <TextInput
             label="Email Address"
             name="email"
             type="email"
             placeholder="jane@formik.com"/>
         {/* <Field name="email" type="email" />
         <ErrorMessage name="email" /> */}
        <TextInput
          label="Your password"
          name="password"
          type="password"
        />
         <button disabled={!validate}  type="submit">Submit</button>
      </Form>

    </Formik>
    // <form onSubmit={formik.handleSubmit}>
    //   <label htmlFor="email">Email Address</label>
    //   <input
    //     id="email"
    //     name="email"
    //     type="email"
    //     onChange={formik.handleChange}
    //     onBlur={formik.handleBlur}
    //     value={formik.values.email}
    //   />
    //   {formik.touched.email && formik.errors.email ? (
    //      <div>{formik.errors.email}</div>
    //    ) : null}

    //   <label htmlFor="password">Email Address</label>
    //   <input
    //     id="password"
    //     name="password"
    //     type="password"
    //     onChange={formik.handleChange}
    //     onBlur={formik.handleBlur}
    //     value={formik.values.email}
    //   />
    //   {formik.touched.password && formik.errors.password ? (
    //      <div>{formik.errors.password}</div>
    //    ) : null}


    //   <button type="submit">Submit</button>
    // </form>
  );
};

export { Login };