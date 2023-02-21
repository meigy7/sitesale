import React from 'react';
import './CreateProducts.css';
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-select';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/slices/cardSlice';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const CreateProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isAuth} = useAuth();
  const optionsCategory = [
    { value: 'Sites', label: 'Сайты'},
    { value: 'Apps', label: 'Приложения'},
    { value: 'SitesAndApps', label: 'Комплекс(сайт + приложение)'},
  ]

  const optionsSubCategory = [
    { value: 'Business', label: 'Бизнес'},
    { value: 'Cryptocurrency', label: 'Криптовалюта'},
    { value: 'It', label: 'It-индустрия'},
    { value: 'SocialServices', label: 'Социальные услуги'},
    { value: 'News', label: 'Новостные'},
    { value: 'Copy', label: 'Копии'},
  ]

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [startPrice, setStartPrice] = React.useState('')
  const [endPrice, setEndPrice] = React.useState('');
  const [link, setLink] = React.useState('');
  const [currentCategory, setCurrentCategory] = React.useState('')
  const [currentSubCategory, setCurrentSubCategory] = React.useState('')

  const submitFormHandler = event => {
    event.preventDefault();
  }

  const createNewProduct = () => {
    if (
      name == '' ||
      currentCategory == '' ||
      currentSubCategory == '' ||
      description == '' ||
      startPrice == '' ||
      endPrice == '' ||
      link == ''
    ) {
      toast.error('Заполните все поля!', {
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
      let newCard = {
        id: Date.now(),
        name: name,
        category: currentCategory,
        subCategory: currentSubCategory,
        startPrice: startPrice,
        endPrice: endPrice,
        link: link
      }

      // dispatch(addCard({
      //   name: name,
      //   category: currentCategory,
      //   subCategory: currentSubCategory,
      //   startPrice: startPrice,
      //   endPrice: endPrice,
      //   link: link
      // }));

      toast.success('Продукт создан!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      axios.post('http://localhost:5000/api/createcards', {
        header: name,
        category: currentCategory,
        subCategory: currentSubCategory,
        price: startPrice,
        subPrice: endPrice,
        title: description,
        capScrin: link,
        scrinOne: "none",
        scrinTwo: "none"
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (e) {
        console.log(e);
      });
      
    }
  }

  const getValueCategory = () => {
    return currentCategory ? optionsCategory.find(category => category.value === currentCategory) : ''
  }

  const onChangeCategory = (newValue) => {
    setCurrentCategory(newValue)
  }

  const getValueSubCategory = () => {
    return currentSubCategory ? optionsSubCategory.find(category => category.value === currentSubCategory) : ''
  }

  const onChangeSubCategory = (newValue) => {
    setCurrentSubCategory(newValue)
  }

  return isAuth ? (
    <div className='containerCreateProducts'>
      <div className='productItem1'>
        <div>
          <form
            className='formProductItem'
            onSubmit={submitFormHandler}
          >
            <div>
              <p className='textInpLabel'>Название</p>
              <input
                className='namedInp'
                placeholder='Название'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <p className='textInpLabel'>Категория</p>
              <Select 
                onChange={onChangeCategory}
                value={getValueCategory()}
                className='namedInpCategory'
                options={optionsCategory}
              />
            </div>
            <div>
              <p className='textInpLabel'>Подкатегория</p>
              <Select 
                onChange={onChangeSubCategory}
                value={getValueSubCategory()}
                className='namedInpCategory'
                options={optionsSubCategory}/>
            </div>
            <div>
              <p className='textInpLabel'>Цена без правок</p>
              <input
                className='namedInp'
                type={'number'}
                min={"0"}
                placeholder='Цена без правок'
                value={startPrice}
                onChange={(e) => setStartPrice(e.target.value)}
              />
            </div>
            <div>
              <p className='textInpLabel'>Цена с правками</p>
              <input
                className='namedInp'
                type={'number'}
                min={"0"}
                placeholder='Цена с правками'
                value={endPrice}
                onChange={(e) => setEndPrice(e.target.value)}
              />
            </div>
            <div>
              <p className='textInpLabel'>Описание</p>
              <textarea
                className='namedInp'
                type={'number'}
                min={"0"}
                placeholder='Описание продукта'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{paddingTop: 10, height: 200}}
              />
            </div>
            <div>
              <p className='textInpLabel'>Ссылка на шапку</p>
              <input
                className='namedInp'
                placeholder='Ссылка на шапку'
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <button
              className='btnCreateCardPost'
              onClick={createNewProduct}
            >
              Создать карточку
            </button>
          </form>
        </div>
      </div>
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
    </div>
  ) : (
    React.useEffect(() => {
      navigate("/")
    })
  )
}

export default CreateProducts;
