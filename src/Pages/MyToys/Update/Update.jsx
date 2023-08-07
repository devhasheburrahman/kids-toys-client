import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const Update = () => {
    const [toy, updateToy] = useState();

    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        fetch(`https://asseenment-11-server-hashebur.vercel.app/allToys/findById/${id}`)
            .then(res => res.json())
            .then(data => {
                updateToy(data);
            })

    }, [])


    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        // console.log(price, quantity, details);
        event.target.reset();

        const updateData = { price, quantity, details };
        console.log(updateData);

        fetch(`https://asseenment-11-server-hashebur.vercel.app/allToys/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify(updateData)

        }).then(res => res.json())
            .then(data => console.log(data))

    }

    return (
        <div>
            <h1 className='text-center font-semibold my-10 text-3xl'>Toy Update Form</h1>
            <form onSubmit={handleUpdate}>
                <div className='w-[1000px] mx-auto '>
                    <div className='flex gap-10'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" name='quantity' defaultValue={toy?.quantity} placeholder="Available Quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Price</span>
                            </label>
                            <input type="text" defaultValue={toy?.price} name='price' placeholder="Price" className="input input-bordered" />

                        </div>
                    </div>
                    <div >
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter Details</span>
                            </label>
                            <textarea name='details' defaultValue={toy?.details} placeholder="Enter Details" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>

                        </div>
                    </div>
                    <div className="form-control mb-6 mt-6">
                        <input className="btn btn-primary" type="submit" value="Update Toys" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Update;