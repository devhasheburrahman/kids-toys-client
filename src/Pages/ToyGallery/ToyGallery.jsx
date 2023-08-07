import React from 'react';

const ToyGallery = () => {
    return (
        <div>
            <h2 className='text-4xl text-center font-semibold my-10'>Toy Groove Photo Gallery</h2>

            <div className='grid md:grid-cols-3 gap-5 md:px-10 '>
                <div className="card card-compact w-96  shadow-xl">
                    <figure><img className='w-[400px] h-[240px]' src={"/g-1.jpeg"} alt="Shoes" /></figure>

                </div>
                <div className="card card-compact w-96  shadow-xl">
                    <figure><img className='w-[400px] h-[240px]' src={"/g-2.jpeg"} alt="Shoes" /></figure>

                </div>
                <div className="card card-compact w-96  shadow-xl">
                    <figure><img className='w-[400px] h-[240px]' src={"/g-3.jpeg"} alt="Shoes" /></figure>

                </div>
                <div className="card card-compact w-96  shadow-xl">
                    <figure><img className='w-[400px] h-[240px]' src={"/g-4.jpeg"} alt="Shoes" /></figure>

                </div>
                <div className="card card-compact w-96  shadow-xl">
                    <figure><img className='w-[400px] h-[240px]' src={"/g-5.jpg"} alt="Shoes" /></figure>

                </div>
                <div className="card card-compact w-96  shadow-xl">
                    <figure><img className='w-[400px] h-[240px]' src={"/g-8.jpg"} alt="Shoes" /></figure>

                </div>
              
                 
            </div>

        </div>
    );
};

export default ToyGallery;