import React from 'react';

const TShirt = ({ product, handleBuyNow }) => {
    const { name, picture, _id, price, gender } = product
    return (
        <div className='p-4 bg-gray-200 rounded shadow-sm hover:shadow-xl'>
            <img src={picture} className="h-60 mx-auto rounded" alt="t-shirt" />
            <div className=' my-3 ml-4'>
                <h1 className='font-bold text-xl'>{name} </h1>
                <p>Price:$ {price}</p>
                
            </div>
            <button onClick={()=>handleBuyNow(product)} className='w-full bg-red-400 p-2 rounded text-white hover:bg-red-500'>Buy Now</button>
        </div>
    );
};

export default TShirt;