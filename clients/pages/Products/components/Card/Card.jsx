import React from 'react';
import { useDispatch } from 'react-redux';
import { onSeeShowItem } from '../../../../redux/slices/cardSlice';
import './Card.css';

export default function Card({
  name,
  category,
  subCategory,
  startPrice,
  endPrice,
  link
}) {

  const dispatch = useDispatch();

  const onShowItem = () => {
    dispatch(onSeeShowItem({
      showItem: true,
      cardName: name
    }))
  }

  return (
      <div className="card">
        <div className="container">
          <img
            className='cardProduct'
            src={link}
            onClick={onShowItem}
          />
          <div className='flexContComment'>
            <p className='pTag'>Название: {name}</p>
            <p className='pPrice'>Цена: {startPrice} р.</p>
          </div>
        </div>
      </div>
  )
}
