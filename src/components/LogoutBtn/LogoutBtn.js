import s from './LogoutBtn.module.css';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';



const LogoutBtn = () => {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
    return (
            <div className={s.container}>
        <p className={s.name}>Welcome, { name}</p>
        <button className={s.btn} type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
    )
}

export default LogoutBtn;