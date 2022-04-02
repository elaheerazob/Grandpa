import React from 'react';
import './Cart.css'

const Cart = ({cart,removeTocart}) => {
    //conditional rendering option
    // 1. element  variable
    //2. ternary operator  condition  ? true : false 
    //3. && operator (short hand)
    // 4. || 
     let command;
     if(cart.length === 0){
         command = <p>Please add one item </p>
     }
     else if(cart.length === 1){
         command= <p>add more item ...</p>
     }
     else{
         command =<p>Thanks for adding item</p>
     }
    return (
        <div>
            <h1>selected Cart</h1>
           
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() =>removeTocart(tshirt)}>X</button>
                    </p>)
            }
            {cart.length === 4 || <div className='green'>
                <p>yes Buy it </p>
                </div>}
            {cart.length === 3 && <div className='green'>
                <h4>Titins</h4>
                <p>Add some</p>
            </div> }
             {command}
             {cart.length !== 4 ? <p>keep adding</p> : <button>Remove all</button>}
             {cart.length === 4 && <button className='green'>Review item</button>}
        </div>
    );
};

export default Cart;