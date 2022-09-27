import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './SingleMeal.css'

const SingleMeal = ({meal, cart, setCart}) => {
    console.log(meal)
   const {strMealThumb, strCategory, idMeal, strInstructions} = meal;
   const handleAddToCart = () => {
        const info = {
            strMealThumb,
            strCategory,
            idMeal,
            price : 110,
        };
        if(cart){
            const newMeal = [...cart, info];
            setCart(newMeal);
            return
        }
        else{
            setCart([info]);
            return;
        }
   }
   const handleBookMark = () => {
    const info = {
        strMealThumb,
        strCategory,
        idMeal,
        quantity : 1,
        bookMark: 'true'
    };
    const prevBookMark = localStorage.getItem('bookmark');
    const oldBookMark = JSON.parse(prevBookMark);

    if(oldBookMark){
        const isExist = oldBookMark.find(m => m.idMeal === idMeal);
        if(isExist){
            alert('already bookmarked');
            return;
        }else{
            localStorage.setItem('bookmark', JSON.stringify([...oldBookMark, info]));
        }
    }
    else{
        localStorage.setItem('bookmark', JSON.stringify([info]));
    }
   }

    return (
        <div className='card' data-aos="zoom-in">
            <img className='meal-img' src={strMealThumb} alt="" />
            <h6>{strCategory}</h6>
            <p>{strInstructions? strInstructions.slice(0, 60) : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, totam nihil? Fugit at aliquam maiores numquam provident laborum, vitae aperiam!'}</p>
            <button className='card-btn'>Details</button>
            <button onClick={handleAddToCart} className='card-btn'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
            <button onClick={handleBookMark} className='card-btn'>Bookmark</button>
        </div>
    );
};

export default SingleMeal;