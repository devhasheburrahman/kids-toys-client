import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';


const ShopCategory = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://asseenment-11-server-hashebur.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const filterToys = (type) => {
        fetch(`https://asseenment-11-server-hashebur.vercel.app/services/${type}`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })

    }


    return (
        <div>
            <h2 className='text-3xl text-center my-10 font-semibold '>Shop Now</h2>
            <div className='flex my-10 gap-4 justify-center'>
                <button onClick={() => filterToys('Ambulance')} className='btn btn-primary'>Ambulance </button>
                <button onClick={() => filterToys('Mini police Car')} className='btn btn-primary' >Mini Police Car</button>
                <button onClick={() => filterToys('bus')} className='btn btn-primary'> bus</button>
            </div>

            <div className='grid md:grid-cols-2 gap-5 md:px-10 px-5'>
                {
                    services?.map((service) => (
                        <div className=''>
                            <div>
                                <div className=" md:flex gap-6 flex-col lg:flex-row">
                                    <img src={service.photo} className="md:w-1/2 w-full rounded-lg shadow-2xl" />
                                    <div className='pt-5 '>
                                        <h1 className="text-2xl font-bold">{service.ToyName}</h1>
                                        <p className="py-6 text-xl">{service.price}</p>
                                        <Rating
                                            placeholderRating={service.rating}
                                            readonly
                                            emptySymbol={<FaRegStar></FaRegStar>}
                                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                            fullSymbol={<FaStar></FaStar>} /> <br />

                                        {/* <Link to={`/ChiefDetails/${service._id}`} > <Button variant="primary">View  Recipes</Button></Link> */}


                                        <Link to={`/details/${service._id}`} service={service}>
                                            <div>
                                                <button className="btn mt-5 btn-primary">view Details</button>
                                            </div>
                                        </Link>


                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default ShopCategory;