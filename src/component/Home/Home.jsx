import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
 import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
    const productData = useLoaderData();
    const [cart, setCart]=useState([])
    // console.log(productData);
    const handleBuyNow=(tShirt)=>{
        const exist=cart.find(existedId=>existedId._id === tShirt._id)
        if (exist) {
            toast('T-shirt already exist')
        }else{
            const newCart=[...cart,tShirt]
            setCart(newCart)

        }

    }
    // console.log(cart);
    const handleRemove=id=>{

        const remaining=cart.filter(remainingCart=>remainingCart._id !== id)
        // console.log(remaining);
        setCart(remaining)
        
    }

    return (
        <div className='grid grid-cols-1 px-10 md:grid-cols-4 md:gap-10 my-5'>
            {/* <TShirt key={productData.} /> */}
            <div className='md:col-span-3 grid grid-cols-3 gap-5'>
                {
                    productData.map(product => <TShirt key={product._id} handleBuyNow={handleBuyNow} product={product} />)
                }
            </div>
            <Cart handleRemove={handleRemove} cart={cart} />
        </div>
    );
};

export default Home;