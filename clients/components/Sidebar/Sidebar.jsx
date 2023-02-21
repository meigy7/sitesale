import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/slices/userSlice';
import { motion } from 'framer-motion';

export default function Sidebar() {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  const [secretSidebar, setSecretSidebar] = React.useState(false)
  return isAuth && email == 'admin@gmail.com' ? (
    <div className='conatinerSidebar'>
      {secretSidebar &&
        <motion.div
          className='blockSecretSidebar'
          initial={{ x: -1000, opacity: 0, }}
          animate={{ x: 0, opacity: 1, }}
          transition={{ delay: 0 }}
        >
          <button
            className='logoSidebar2'
            onClick={() => setSecretSidebar(prev => !prev)}
          >
            SiteSale
          </button>
          <input
            className='searchInpSecret'
            placeholder='Search...'
          />
          <div className='divSidebarSecret'>
            <Link
              className='underline-one'
              to={'/products'}
            >
              Все
            </Link>
          </div>
          <div>
            <Link
              to={'/products'}
              className='underline-one'
            >
              Сайты
            </Link>
          </div>
          <div>
            <Link
              className='underline-one'
              to={'/products'}
            >
              Приложения
            </Link>
          </div>
          <div>
            <Link
              className='underline-one'
              to={'/products'}
            >
              Комплекс (Сайт+Приложение)
            </Link>
          </div>
          <div>
            <Link
              to={'/bascet'}
              className='underline-one'
            >
              Моя корзина
            </Link>
          </div>
          <div>
            <Link
              to={'/createproducts'}
              className='underline-one'
            >
              Создать
            </Link>
          </div>
          <p className='textCategoryInSecretSidebar'>Категории</p>
          <div className='inputBlockProductsSecret'>
            <button className='btnCategory'>
              Бизнес
            </button>
            <button className='btnCategory'>
              Криптовалюта
            </button>
            <button className='btnCategory'>
              It индустрия
            </button>
            <button className='btnCategory'>
              Социальные услуги
            </button>
            <button className='btnCategory'>
              Новостные
            </button>
            <button className='btnCategory'>
              Копии
            </button>
          </div>
          <div className='itemSidebar2'>
            <input
              className='searchInp'
              placeholder='Search...'
            />
            <button
              className='btnLogout'
              onClick={() => dispatch(removeUser())}
            >
              Выйти
            </button>
          </div>
        </motion.div>
      }
      <div className='itemSidebar1'>
        <div className='logoSidebar'>
          <Link
            className='linkLogoSidebar'
            to={'/home'}>
            <h3>SiteSale</h3>
          </Link>
        </div>
        <div className='logoSidebar1'>
          <button
            onClick={() => setSecretSidebar(prev => !prev)}
            className='logoSidebar1'>
            <h3>SiteSale</h3>
          </button>
        </div>
        <div className='blockLinkSidebar'>
          <Link
            className='underline-one'
            to={'/products'}
          >
            Все
          </Link>
          <Link
            to={'/products'}
            className='underline-one'
          >
            Сайты
          </Link>
          <Link
            className='underline-one'
            to={'/products'}
          >
            Приложения
          </Link>
          <Link
            className='underline-one'
            to={'/products'}
          >
            Комплекс (Сайт+Приложение)
          </Link>
          <Link
            to={'/bascet'}
            className='underline-one'
          >
            Моя корзина
          </Link>
          <Link
            to={'/createproducts'}
            className='underline-one'
          >
            Создать
          </Link>
        </div>
      </div>
      <div className='itemSidebar2'>
        <input
          className='searchInp'
          placeholder='Search...'
        />
        <button
          className='btnLogout'
          onClick={() => dispatch(removeUser())}
        >
          Выйти
        </button>
      </div>
      <hr className='lineSidebar' />
    </div>
  ) : (
    <div className='conatinerSidebar'>
      {secretSidebar &&
        <motion.div
          className='blockSecretSidebar'
          initial={{ x: -1000, opacity: 0, }}
          animate={{ x: 0, opacity: 1, }}
          transition={{ delay: 0 }}
        >
          <button
            className='logoSidebar2'
            onClick={() => setSecretSidebar(prev => !prev)}
          >
            SiteSale
          </button>
          <div className='divSidebarSecret'>
            <Link
              className='underline-one'
              to={'/products'}
            >
              Все
            </Link>
          </div>
          <div>
            <Link
              to={'/products'}
              className='underline-one'
            >
              Сайты
            </Link>
          </div>
          <div>
            <Link
              className='underline-one'
              to={'/products'}
            >
              Приложения
            </Link>
          </div>
          <div>
            <Link
              className='underline-one'
              to={'/products'}
            >
              Комплекс (Сайт+Приложение)
            </Link>
          </div>
          <div>
            <Link
              to={'/bascet'}
              className='underline-one'
            >
              Моя корзина
            </Link>
          </div>
          <div>
          </div>
        </motion.div>
      }
      <div className='itemSidebar1'>
        <div className='logoSidebar'>
          <Link
            className='linkLogoSidebar'
            to={'/home'}>
            <h3>SiteSale</h3>
          </Link>
        </div>
        <div className='logoSidebar1'>
          <button
            onClick={() => setSecretSidebar(prev => !prev)}
            className='logoSidebar1'>
            <h3>SiteSale</h3>
          </button>
        </div>
        <div className='blockLinkSidebar'>
          <Link
            className='underline-one'
            to={'/products'}
          >
            Все
          </Link>
          <Link
            to={'/products'}
            className='underline-one'
          >
            Сайты
          </Link>
          <Link
            className='underline-one'
            to={'/products'}
          >
            Приложения
          </Link>
          <Link
            className='underline-one'
            to={'/products'}
          >
            Комплекс (Сайт+Приложение)
          </Link>
          <Link
            to={'/bascet'}
            className='underline-one'
          >
            Моя корзина
          </Link>
        </div>
      </div>
      <div className='itemSidebar2'>
        <input
          className='searchInp'
          placeholder='Search...'
        />
        <button
          className='btnLogout'
          onClick={() => dispatch(removeUser())}
        >
          Выйти
        </button>
      </div>
      <hr className='lineSidebar' />
    </div>
  )
}
