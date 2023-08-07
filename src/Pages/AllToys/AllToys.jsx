import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToys = () => {

    const [Toys, setToys] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://asseenment-11-server-hashebur.vercel.app/allToys`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                setIsLoading(false)
            })
    }, [])

    const handleSearch = (e) => {
        setIsLoading(true)
        const value = e.target.value;
        // console.log(value);
        fetch(`https://asseenment-11-server-hashebur.vercel.app/allToys/findByCategory/${value}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                setIsLoading(false)
            })



    }

    return (
        <div>
            <h1 className='text-center text-4xl font-semibold my-10'>ALL TOYS</h1>

            <div className='text-center my-10'>
                <input onChange={handleSearch} type="text" placeholder="Type here" className="input outline input-bordered w-full max-w-xs" />
                <button className='btn' >{
                    isLoading ? 'Searching' : 'Search'
                } </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th> #</th>
                            <th>Seller Name</th>
                            <th>TOY NAME</th>
                            <th>SUB-CATEGORY</th>
                            <th>AVAILABLE QUANTITY</th>
                            <th>Price</th>
                            <th>DETAILS</th>

                        </tr>
                    </thead>
                    <tfoot>

                        {
                            Toys?.map((toy, index) => (
                                <tr key={toy._id}>
                                    <th>{index + 1}</th>
                                    <th>{toy.sellerName}</th>
                                    <th>{toy.ToyName}</th>
                                    <th>{toy.category}</th>
                                    <th>{toy.quantity}</th>
                                    <th>{toy.price}</th>
                                    <th>
                                        <Link to={`/details/${toy._id}`}>
                                            <div>
                                                <button className='btn btn-outline'>DETAILS </button>
                                            </div>
                                        </Link>
                                    </th>

                                </tr>
                            ))
                        }

                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default AllToys;