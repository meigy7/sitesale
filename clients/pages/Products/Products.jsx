import React from 'react';
import './Products.css';
import { motion } from 'framer-motion';
import CardList from './components/CardList/CardList';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { offSeeShowItem } from '../../redux/slices/cardSlice';
import { useGetGoodsQuery } from '../../redux/getCards';

export default function Products() {

  //useHooks
  const [filter, setFilter] = React.useState(false);
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const onShowItem = useSelector(state => state.cards.showItem);
  const itemName = useSelector(state => state.cards.cardName);

  const [item, setItem] = React.useState({});

  //variables
  const { data = [] } = useGetGoodsQuery();

  React.useEffect(() => {
    if (itemName && data.length > 0) {
      setItem(data.find(v => v.header == itemName))
    }
  }, [itemName, data]);

  //functions
  const dispatch = useDispatch();
  const ofSeeItem = () => {
    dispatch(offSeeShowItem({
      showItem: false
    }))
  }

  return isAuth ? (
    <div className='containerProducts'>
      <div className='itemProducts1'>
        <div className='inputBlockProducts'>
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
      </div>
      <div className='itemProducts2'>
        <div className='inputBlockProducts1'>
          <button
            onClick={() => setFilter(prev => !prev)}
            className='btnFilter'>
            Фильтры
          </button>
        </div>
      </div>


      <div className='itemProducts3'>
        <div className='inputBlockProducts'>
        </div>
      </div>
      {filter &&
        <motion.div
          className='itemProducts4'
          initial={{ x: -1000, opacity: 0, }}
          animate={{ x: 0, opacity: 1, }}
          transition={{ delay: 0 }}
        >
          <div>
            <input
              className='inputSearchTag'
              placeholder='Теги'
            />
            <input
              type={'number'}
              className='inputSearchPrice'
              placeholder='Цена от:'
            />
            <input
              type={'number'}
              className='inputSearchPriceDo'
              placeholder='Цена до:'
            />
          </div>
        </motion.div>
      }

      <div className='itemProducts5'>
        <div>
          <div className='headersGenProducts'>
            <h1 className='headerProducts'>
              Покупайте лучшие готовые решения.
            </h1>
            <p className='textProducts1'>
              Нашей платформой пользуется более 10000+ человек
            </p>
          </div>
        </div>
      </div>
      <div className='itemProducts6'>
        <div>
          {onShowItem &&
            <motion.div
              className='containerSecretShowItem'
              initial={{ y: 1000, opacity: 0, }}
              animate={{ y: 0, opacity: 1, }}
              transition={{ delay: 0 }}
            >
              <div className='secretShowItem1'>
                <img
                  className='imgSecretShowItem1'
                  src={item?.capScrin}
                />
              </div>
              <div className='secretShowItem2'>
                <p className='textNamed'>Название - {item?.header}</p>
                <p className='textNamed'>
                  Описание: <br />
                  {item.title}
                </p>
                <p className='textNamed'>Цена без правок - {item?.price} р.</p>
                <p className='textNamed'>Цена с правками - {item?.subPrice} р.</p>
              </div>
              <div className='secretShowItem3'>
                <div>
                  <button
                    className='removeShowItem'
                    onClick={ofSeeItem}
                  >
                    Закрыть
                  </button>
                </div>
                <div>
                  <button
                    className='addBascet'
                  >
                    Добавить в корзину
                  </button>
                </div>
              </div>
            </motion.div>
          }
          {!onShowItem &&
            <motion.div
              className='cardTetxtSite'
              initial={{ y: -1000, opacity: 0, }}
              animate={{ y: 0, opacity: 1, }}
              transition={{ delay: 0 }}
            >
              <CardList />
            </motion.div>
          }
        </div>
      </div>
    </div>
  ) : (
    React.useEffect(() => {
      navigate("/")
    })
  )
}
