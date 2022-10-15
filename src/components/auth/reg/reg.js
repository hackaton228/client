import React, {useEffect, useState} from 'react';
import './reg.scss'
import {Link, useNavigate} from 'react-router-dom'
import Api from "../../../Api";

const Reg = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isReg, setIsReg] = useState(false);
  let navigation = useNavigate();

  const changeForm = () => {
    setIsReg(!isReg)
  }
  
  // REACT TOP!!!!!!!!!!
  
  const Submit = (e) => {
    e.preventDefault();
    if(isReg === false) {
      Api.Auth.register(email, password)
        .then(() => {
          setIsReg(true);
        })
        .catch(e => {
          console.log(e)
        })
    }

    else {
      Api.Auth.login(email, password)
        .then(response => {
          localStorage.setItem('token', `Bearer ${response.data}`)
          Api.Auth.check()
            .then(response => {
              console.log(response.data)
              navigation('/')
            })
            .catch(e => {
              console.log(e)
            })
        })
        .catch(e => {
          console.log(e)
        })
    }
  }

  return (
    <div className='reg__container'>
      <form className="reg__form">
        <p className='reg__title'>{isReg ? "Вход" : "Регистрация"}</p>

        <label className='reg__label'>Емайл</label>
        <input
          onChange={e => setEmail(e.target.value)}
          className='reg__input'
        />

        <label className='reg__label'>Пароль</label>
        <input
          onChange={e => setPassword(e.target.value)}
          className='reg__input'
        />

        <div className='reg__btn-box'>
          {isReg ? <Link onClick={changeForm} to='/auth'>Нет аккаунта? Зарегестрируйтесь</Link> : <Link onClick={changeForm} to='/auth'>Есть аккаунт? Войдите</Link>}

          <button
            onClick={e => Submit(e)}
            className='reg__button'
          >{isReg ? 'Войти' : 'Регистрация'}</button>
        </div>
      </form>
    </div>
  );
};

export default Reg;