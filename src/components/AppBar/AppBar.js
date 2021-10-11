import s from './AppBar.module.css';
import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import LogoutBtn from 'components/LogoutBtn';

const AppBar = () => {
    return (
      <header className={s.header}>
          <Navigation/>
          <AuthNav />
          <LogoutBtn/>
    </header>
    )
}

export default AppBar;
