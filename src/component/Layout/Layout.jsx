import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NoDataMassage = createContext('massage')
const Layout = () => {
    const massage = 'Buy some T-shirt'
    return (
        <div>
            <NoDataMassage.Provider value={massage}>
                <Header />
                <Outlet />
                <ToastContainer />
            </NoDataMassage.Provider>
        </div>
    );
};

export default Layout;