import React from 'react';

const Cart = ({cart, handleRemove}) => {
    return (
        <div className='bg-gray-200 px-4 rounded'>
            <h1 className='text-center font-bold text-xl py-2'>Order Summary : {cart.length} </h1>
            {
                cart.map(item=> {
                    return (
                        <div key={item._id} className='flex justify-between mt-2'>
                            <p>{item.name}</p>
                            <button onClick={()=>handleRemove(item._id)} className='rounded bg-red-700 text-white py-1 px-2'>Remove</button>
                        </div>
                    )
                } )
            }
        </div>
    );
};

export default Cart;