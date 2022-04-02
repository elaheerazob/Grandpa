import React from 'react';
import './TShairt.css'

const TShairt = ({handeladdtoCart,tShairt}) => {
    const {price,picture,name} =tShairt;
    return (
        <div className='t-shairt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price : {price}</p>
            <button onClick={() => handeladdtoCart(tShairt)}>Add to Cart</button>
        </div>
    );
};

export default TShairt;