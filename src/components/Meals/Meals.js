import React from 'react';
import SingleMeal from '../SingleMeal/SingleMeal';
import './Meals.css'

const Meals = ({meals, cart, setCart}) => {
    return (
        <div>
           <div className="card-container">
                {
                    meals.map( meal => 
                    <SingleMeal 
                    meal={meal} 
                    key={meal.idMeal}
                    cart = {cart}
                    setCart = {setCart}
                    ></SingleMeal>
                    )
                }
           </div>
        </div>
    );
};

export default Meals;