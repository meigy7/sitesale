import React from 'react';
import './CardBascet.css';

export default function CardBascet() {
  return (
    <div className='cardBascet'>
      <hr className='lineOneBuscet'/>
      <div className='containerCardBascet'>
        <div className='itemCardBascet1'>
          <img
            className='imgCardBascet'
            src='https://sun9-10.userapi.com/impg/HagZsyo-4tjKMr5meznuiAGWZUjerb0s36NdWA/0F0nm7UYGPY.jpg?size=1080x810&quality=95&sign=52c11056cd1a5df7409dde5702d7a25c&type=album'
          />
        </div>
        <div className='itemCardBascet2'>
          <div className='blockBascet1'>
            <h2 className='textCardBascet'>Описание:</h2>
            <p className='textCardBascet'>Категория - личный бизнес.</p>
            <p className='textCardBascet'>Название - Buisnes site</p>
            <p className='textCardBascet'>Цена без правок - 400$</p>
            <p className='textCardBascet'>Цена с правками - 1500$</p>
            <div className='blockBascet2'>
              <p className='textCardBascet'>Будут правки
                <input
                  type={'checkbox'}
                  className='inpCheckboxCardBascet'
                />
              </p>
            </div>
            <button className='btnCardBascet2'>Удалить</button>
          </div>
        </div>
        <div className='itemCardBascet3'>
        </div>
      </div>
    </div>
  )
}
