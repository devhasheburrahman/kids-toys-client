import React from 'react';

const OurService = () => {
    return (
        <div>
            <h1 className='text-3xl my-10 font-semibold text-center'>Our Services</h1>
            <div className='grid md:grid-cols-3 gap-5 px-10'>
                <div className="card w-96 glass">
                    <figure><img className='w-full h-72' src={'/g-2.jpeg'} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sport Car</h2>
                        <p>The sports car is a stylish and fast toy vehicle that captures the essence of speed and performance. Its sleek design and vibrant colors make it stand out. Kids can pretend to race it on tracks or take it on exciting adventures with their imagination.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"> See More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img className='w-full h-72' src={'/s-b-1.jpeg'} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bus</h2>
                        <p>The toy bus is a large, yellow vehicle with wheels that move. It has seating for many passengers and big windows for them to look out. Kids can imagine picking up and dropping off passengers on their own little adventures.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"> See More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img className='w-full h-72' src={'/s-car-3.jpeg'} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Regular Car</h2>
                        <p>The regular car is a classic toy vehicle that resembles a real-life car. It is perfect for everyday play and can be used for various scenarios and imaginative play. Kids can create their own stories and use the regular car for transportation or family outings</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"> See More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img className='w-full h-72' src={'/truck.jpeg'} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Truck</h2>
                        <p>The toy truck is a sturdy vehicle designed for heavy-duty play. It features a cargo bed that can be filled with small objects, and its wheels are designed to handle rough terrain. Kids can load up the truck and transport their cargo to different destinations.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"> See More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img className='w-full h-72' src={'/s-car-p2.jpeg'} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Police Car</h2>
                        <p>The police car is a fast and sleek toy vehicle used for law enforcement missions. It is equipped with flashing lights and sirens for a realistic play experience. Kids can imagine chasing down criminals and maintaining law and order with this exciting toy.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"> See More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img className='w-full h-72' src={'/ambulance.jpeg'} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Ambulance</h2>
                        <p>The toy Ambulance is a large, yellow vehicle with wheels that move. It has seating for many passengers and big windows for them to look out. Kids can imagine picking up and dropping off passengers on their own little adventures.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"> See More</button>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default OurService;