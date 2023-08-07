import React from 'react';
import NavigationBer from '../Pages/Shared/NavigationBer/NavigationBer';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavigationBer />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;