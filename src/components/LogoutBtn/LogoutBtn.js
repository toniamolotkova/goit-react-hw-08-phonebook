import s from './LogoutBtn.module.css';

const LogoutBtn = () => {
    return (
            <div className={s.container}>
      <p className={s.name}>Добро пожаловать, </p>
          <button className={ s.btn}type="button" >
        Logout
      </button>
    </div>
    )
}

export default LogoutBtn;