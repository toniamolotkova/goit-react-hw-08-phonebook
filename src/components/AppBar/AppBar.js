import s from './AppBar.module.css';
import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import LogoutBtn from 'components/LogoutBtn';
import authSelectors from 'redux/auth/auth-selectors';

const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
      <header className={s.header}>
            <Navigation />
            {isLoggedIn ? <LogoutBtn /> :  <AuthNav />} 
            
           
          
    </header>
    )
}

export default AppBar;
