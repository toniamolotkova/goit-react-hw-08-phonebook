import { NavLink } from "react-router-dom";
import s from './AuthNav.module.css';

const AuthNav = () => {
    return (
            <div>
      <NavLink
        to="/register"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        login
      </NavLink>
    </div>
    )
}

export default AuthNav;