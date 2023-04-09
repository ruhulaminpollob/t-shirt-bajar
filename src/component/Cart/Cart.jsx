import React, { useContext } from 'react';
import { NoDataMassage } from '../Layout/Layout';

const Cart = ({ cart, handleRemove }) => {
    const msg = useContext(NoDataMassage)
    
    return (
        <div className='bg-gray-200 px-4 rounded'>
            <h1 className='text-center font-bold text-xl py-2'>Order Summary : {cart.length} </h1>
            {
               cart.length===0 && <p className='text-center text-gray-400 font-bold'><small>{msg}</small></p>
            }

            {
                cart.map(item => {
                    return (

                        <div key={item._id} className='flex justify-between mt-2'>


                            <p>{item.name}</p>
                            <button onClick={() => handleRemove(item._id)} className='rounded bg-red-700 text-white py-1 px-2'>Remove</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Cart;