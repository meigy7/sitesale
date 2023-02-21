import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function Home() {

  const navigate = useNavigate();
  const { isAuth } = useAuth();

  return isAuth ? (
    <div className='containerHome'>
      <div className='itemHome1'>
        <div className='blockHome1'>
          <h1 className='headerHome1'>SiteSale</h1>
          <h2 className='textHome1'>
            Приветствуем вас на SiteSale. Сдесь вы можете<br />
            приобрести сайты или полноценные веб-приложения.<br />
            Начните пользоваться нашими услугами прямо сейчас!
          </h2>
          <button className='btnHome1'>
            <Link
              to={'/products'}
              className='linkGen'
            >Начать</Link>
          </button>
        </div>
      </div>
      <div className='itemHome2'>
        <img
          src='https://sun9-10.userapi.com/impg/HagZsyo-4tjKMr5meznuiAGWZUjerb0s36NdWA/0F0nm7UYGPY.jpg?size=1080x810&quality=95&sign=52c11056cd1a5df7409dde5702d7a25c&type=album'
          className='imgHome1'
        />
        <img />
      </div>
      <div className='itemHome3'>
        <div className='blockHome2'>
          <h1 className='headerHome2'>SiteSale:</h1>
          <p className='textHome2'>
            Мы уважаем всех кто присутствует на SiteSale,<br />
            поэтому вы всегда можете обратиться в нашу <br />
            поддержку в Telegram.
          </p>
        </div>
        <div className='blockHome3'>
          <h3 className='tetxHome3'>Ссылки:</h3>
          <p className='textHome4'>
            Поддержка:
            <a
              href='https://t.me/Ryzhev_3301'
              className='linksTelegram'
            >
              @SiteSale
            </a> 
          </p>
        </div>
        <div className='blockHome3'>
          <h3 className='tetxHome3'>Гайды:</h3>
          <p className='textHome4'>
            <Link to={'/getStarted'} className='linksTelegramGudes'>Как начать?</Link>
          </p>
          <p className='textHome4'>
            <Link to={'/getStarted'} className='linksTelegramGudes'>Выбор</Link>
          </p>
          <p className='textHome4'>
            <Link to={'/getStarted'} className='linksTelegramGudes'>Оплата</Link>
          </p>
        </div>
        <div className='blockHome3'>
          <h3 className='tetxHome3'>Сообщество:</h3>
          <p className='textHome4'>
            <a className='linksTelegram' href='https://t.me/Ryzhev_3301'>
              Telegram разработчика
            </a>
          </p>
        </div>
      </div>
      <div >
      </div>
    </div>
  ) : (
    React.useEffect(() => {
      navigate("/")
    })
  )
}
