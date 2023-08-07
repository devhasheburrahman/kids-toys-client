import React from 'react';
import Header from './Header/Header';
import ToyGallery from '../ToyGallery/ToyGallery';
import About from '../AboutUs/About';
import ShopCategory from '../ShopCategory/ShopCategory'; 
import OurService from '../ourService/OurService';

const Home = () => {
    return (
        <div>
            <Header />
            <ToyGallery />
            <ShopCategory />
            <OurService /> 
            <About />

        </div>
    );
};

export default Home;
