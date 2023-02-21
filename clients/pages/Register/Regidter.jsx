import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';

export default function Register() {

  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [repeadPass, setRepeadPass] = React.useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleRegister = (email, password) => {
    if (email == '' || pass == '' || repeadPass == '') {
      toast.error('Заполните все данные', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (pass !== repeadPass) {
      toast.error('Введеные пароли не совпадают', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success('Вы успешно зарегистрировались', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then(({ user }) => {
            console.log();
            dispatch(setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
            }));
            navigate('/home')
          })
          .catch(console.error)
      }, 3000);
    }

    
  }

  return (
    <div className='containerLogin'>
      <div className='itemLogin1'>
        <h2 className='textHeaderLogin1'><li>SiteSale</li></h2>
        <div className='blockAuth1'>
          <h1 className='textHeaderLogin2'>Добро пожаловать</h1>
          <p className='textLogin1'>Добро пожаловать, осталось уточнить детали.</p>
          <form>
            <p className='emailTextAuth'>Email</p>
            <input
              className='inpEmailAuth'
              type={'email'}
              placeholder='Введите ваш email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
          <form>
            <p className='emailTextAuth' >Пароль</p>
            <input
              className='inpEmailAuth'
              type={'password'}
              placeholder='Введите ваш пароль'
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </form>
          <form>
            <p className='emailTextAuth' >Пароль еще раз</p>
            <input
              className='inpEmailAuth'
              type={'password'}
              placeholder='Введите ваш пароль'
              value={repeadPass}
              onChange={(e) => setRepeadPass(e.target.value)}
            />
          </form>
          <div className='linkBlockLogin'>
            <p>
              <Link
                className='linkAccoiuntLogin'
                to={'/'}
              >
                Уже есть аккаунт?
              </Link>
            </p>
          </div>
          <button
            onClick={() => handleRegister(email, pass)}
            className='btnLogin1'
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
      <div className='itemLogin2'>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <img
          className='imgSwitchLoogin'
          src='https://sun9-88.userapi.com/impg/oG0cTySqCw8bd1yilixoFA_TaR3kHUeqLTcbFQ/1kYaaVH2H08.jpg?size=600x800&quality=95&sign=801d554e3c404283d0d539ce767f5522&type=album'
        />
      </div>


    </div>
  )
}

