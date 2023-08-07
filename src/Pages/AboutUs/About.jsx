import React from 'react';

const About = () => {
    return (
        <div>
            <h2 className='text-4xl my-10 text-center font-semibold'>About Us</h2>
            <div className='md:flex  gap-5 px-10 mb-10 '>
                <div  className='md:w-1/2'>
                <img className='w-full rounded-lg' src={"/g-8.jpg"} alt="" />
                </div>
                <div className='pt-5 md:w-1/2'>
                    "Discover a world of toys at ToyTrove! Delight in the joy of finding the perfect toys for kids of all ages. From action-packed action figures to educational wonders and cuddly companions, ToyTrove is your magical destination for endless playtime adventures."

                    The name "ToyTrove" implies a treasure trove of toys, suggesting a wide and diverse collection of toys available on the website. It conveys a sense of excitement and exploration, making it an ideal name for a Toy Marketplace website. Feel free to use this name or modify it according to your preferences and vision for the website. Happy creating!
                </div>
            </div>
        </div>


    );
};

export default About;