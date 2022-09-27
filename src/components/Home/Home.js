import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import './Home.css';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'

const Home = () => {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');
    const [cart, setCart] = useState([])

    useEffect( ()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => setMeals(data?.meals))
    }, [search]);

    const handleDelete = (id) =>{
        const restMeal = cart.filter(meal => meal.idMeal !== id);
        setCart(restMeal);
        toast("Wow!! Deleted from cart");
        Swal.fire(
            'Good job!',
            'You have deleted!',
            'success'
          )
    }

    return (
        <div>
            <div className="home-container">
                <div className="food-container">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className='search-input'/>
                    <button className='search-btn'>Search</button>
                    <div className="meals-container">
                        <Meals 
                        meals={meals}
                        cart={cart}
                        setCart ={setCart}
                        ></Meals>
                    </div>
                </div>
                <div className="food-cart">
                    <div className="cart">
                        <p>This is Food Cart</p>
                        {
                            cart?.map( m =>
                                <div className="cart-info-container">
                                    <li>Name : {m.strCategory}</li>
                                    <button onClick={()=> handleDelete(m.idMeal)} className='delete-btn'>X</button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;