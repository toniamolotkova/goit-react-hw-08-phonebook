import s from './HomePage.module.css';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HomePage = () => {

     const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        <>
            {isLoggedIn ?
                <div className={ s.wrap}>
                    <p className={ s.text}> Welcome to our App! Try to add your contacts here: </p >
                         <Link
        to="/contacts"
       
        className={s.link}
  
      >
        Contacts
        </Link>
       </div>
            
                : (<div className={ s.wrap}>
                    <p className={ s.text}> Hi! If you want to use our PhoneBook App, just register here: </p>
                                   <Link
        to="/register"

        className={s.link}
       
      >
        Registration
                </Link>
                </div>)
}
    </>
        )}
       

export default HomePage ; 