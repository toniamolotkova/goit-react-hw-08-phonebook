import React from 'react';
import { useField } from 'formik';
import s from './MyTextInput.module.css';

 
 const MyTextInput = ({ label, ...props }) => {

   const [field, meta] = useField(props);
   return (
     <>
       <label className={ s.label} htmlFor={props.id || props.name}>{label}</label>
       <input className={s.input} {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className={s.error}>{meta.error}</div>
       ) : null}
     </>
   );
 };

export { MyTextInput }; 