import React, { useState } from 'react';
import useTshirt from '../../Hooks/useTshirt';
import Cart from '../Cart/Cart';
import TShairt from '../TShairt/TShairt';
import './Home.css'

const Home = () => {
    const [tShairts,setTshairts] =useTshirt();
    const [cart,setCart] =useState([]);

    const handeladdtoCart = (selecteditem) =>{
        const exised = cart.find(tShairt => tShairt._id === selecteditem._id);
        if(!exised){
            const newCart =[...cart,selecteditem];
            setCart(newCart);
        }else{
            alert('alrady add')
        }
    }

    const removeTocart = (selecteditem) =>{
        const rest =cart.filter(tShairt =>tShairt._id !== selecteditem._id);
        setCart(rest);
    }
    return (
        <div className='home-container'>
            <div className='tShirt-container'>
               {
                    tShairts.map(tShairt => <TShairt 
                        key={tShairt._id} 
                        tShairt={tShairt}
                        handeladdtoCart={handeladdtoCart}
                        
                        ></TShairt>)
               }
            </div>
            <div className='cart-container'>
                    <Cart key={cart._id}
                     cart={cart}
                     removeTocart={removeTocart}
                     ></Cart>
            </div>
           
        </div>
    );
};

export default Home;