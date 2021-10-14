import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={ s.nav}>
            <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>Phonebook</NavLink>
            <NavLink to="/contacts" className={s.link} activeClassName={s.activeLink}>Contacts</NavLink>
            </nav>
    )
}

export default Navigation;