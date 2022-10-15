import React, {useState} from 'react';
import './reg.scss'
import {useNavigate, Link} from 'react-router-dom'
import Api from "../../../Api";

const Reg = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SubmitReg = () => {
    Api.Auth.register(email, password).then(response => {
      console.log(response.data)
    })
  }

  return (
    <div className='reg__container'>
      <form className="reg__form">
        <p className='reg__title'>Регистрация</p>

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
          <Link
            className='reg__link'
            to='/'
          >Есть аккаунт? Войдите</Link>

          <button
            onClick={SubmitReg}
            className='reg__button'
          >Регистрация</button>
        </div>
      </form>
    </div>
  );
};

export default Reg;