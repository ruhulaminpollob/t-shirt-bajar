import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex gap-2 justify-center p-3 shadow-lg bg-gray-300'>
            <Link to="/">Home</Link>
            <Link to="/order">Order</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Header;