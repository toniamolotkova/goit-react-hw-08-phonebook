import { AuthNav } from '../AuthNav/AuthNav';
//import { RegisterForm } from 'views/RegisterForm/RegisterForm';
import s from './AppBar.module.css';

function AppBar () {
  
  return (
      <header className={s.header}>
        <h1 className="title">Phonebook</h1>
          
      <AuthNav/>      
    </header>
  );
}

export { AppBar };