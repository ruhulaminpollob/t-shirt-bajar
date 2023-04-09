import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const productData=useLoaderData();
    // console.log(productData);
    return (
        <div>
            <h1>T-shirt count {productData.length}</h1>
        </div>
    );
};

export default Home;