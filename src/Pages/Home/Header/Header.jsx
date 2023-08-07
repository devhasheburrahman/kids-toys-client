import React from 'react';

const Header = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR41VsqtKrS5rV2qg8izBVm2hTqR0jpCdXiU250gWcie0Y4QqjW)' }}>
            <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-2xl md:text-5xl font-bold"> Discover the Joy of toy Cars</h1>
                    <p className="mb-5">Welcome to our Toy Car Shop, where imagination meets the thrill of the race! </p>

                </div>
            </div>
        </div>
    );
};

export default Header;