import React, { useContext } from 'react';


const AddToys = () => {

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const sellerEmail = form.email.value;
        const photo = form.photo.value;
        const ToyName = form.name.value;
        const sellerName = form.sellerName.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const details = form.details.value;
        event.target.reset();


        // console.log( sellerName, sellerEmail, photo, ToyName, category, price, quantity, rating);
        const toyData = { sellerName, sellerEmail, photo, ToyName, category, price, quantity, rating, details }
        console.log(toyData);

        fetch('https://asseenment-11-server-hashebur.vercel.app/services', {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(toyData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return (
        <div className='w-[1000px] mb-20  mx-auto'>
            <h1 className='text-3xl text-center my-10'> Add toys Form</h1>

            <form onSubmit={handleAddToy}>

                <div className='flex gap-10'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Toy Name" className="input input-bordered" />

                    </div>
                </div>
                <div className='flex gap-10'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Seller Email" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name='sellerName' placeholder="Seller Name" className="input input-bordered" />

                    </div>
                </div>
                <div className='flex gap-10'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <select name='category' className="select select-ghost input input-bordered w-full ">
                            <option disabled selected> Ambulance</option>
                            <option>Mini police Car</option>
                            <option>bus</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered" />

                    </div>
                </div>
                <div className='flex gap-10'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"> Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />

                    </div>
                </div>
                <div >
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Enter Details</span>
                        </label>
                        <textarea name='details' placeholder="Enter Details" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>

                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Add Toys" />
                </div>
            </form>
        </div>

    );
};

export default AddToys;