import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [detail, setDetail] = useState();
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://asseenment-11-server-hashebur.vercel.app/allToys/findById/${id}`)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [])

    return (
        <div className='flex my-10 gap-5 px-10 justify-center  space-y-6'>
            <div className='w-1/2'>
                <img className='w-full ' src={detail?.photo} alt="" />
            </div>

            <div className='border w-1/2 p-10 space-y-5'>
                <h1 className="text-2xl font-bold">{detail?.ToyName}</h1>
                <p > <span className='text-2xl'>Seller Email : </span> {detail?.sellerEmail} </p>
                <p> <span className='text-2xl'>Price : </span> {detail?.price}</p>
                <Rating
                    placeholderRating={detail?.rating}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                    fullSymbol={<FaStar></FaStar>} />
                <p className='font-semibold text-2xl'>Quentity : <span>{detail?.quantity}</span></p>
                <p>{detail?.details}</p>
            </div>
        </div>
    );
};

export default Details;