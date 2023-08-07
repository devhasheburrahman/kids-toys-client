import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provaider/AuthProvider';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [Toys, setToys] = useState([]);
    console.log(user);

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://asseenment-11-server-hashebur.vercel.app/allToys/${user?.email}?sortType=asc&limit=10`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/allToys/${_id}`, {
                    method: 'DELETE'
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            const remainingToys = Toys.filter(toy => toy._id !== _id);
                            setToys(remainingToys)
                        }
                    })
            }
        })
    }

    const handleUpdate = _id => {
        navigate(`/update/${_id}`)

    }
    const handleSort = (e) => {
        const value = e.target.value;
        console.log(value);
        fetch(`https://asseenment-11-server-hashebur.vercel.app/allToys/${user?.email}?sortType=${value}&limit=10`)
            .then(res => res.json())
            .then(data => setToys(data))
    }


    return (
        <div>
            <h1 className='text-center text-4xl font-semibold my-10'>ALL My Toys</h1>

            <div className='text-center my-10'>
                <select onChange={handleSort} className="select select-bordered  w-full max-w-xs">
                    <option value={'des'} >Descending</option>
                    <option value={'asc'} selected>Ascending</option>
                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full table-xs">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>TOY NAME</th>
                            <th>SELLER NAME</th>
                            <th>SELLER EMAIL</th>
                            <th>SUB-CATEGORY</th>
                            <th>RATING</th>
                            <th>AVAILABLE QUANTITY</th>
                            <th>DETAILS</th>
                            <th>ACTION</th>

                        </tr>
                    </thead>
                    <tfoot>

                        {
                            Toys.map((toy, index) => (
                                <tr key={toy._id}>
                                    <th>{index + 1}</th>
                                    <th><img className='h-24 w-24' src={toy.photo} alt="" /></th>
                                    <th>{toy.ToyName}</th>
                                    <th>{toy.sellerName}</th>
                                    <th>{toy.sellerEmail}</th>
                                    <th>{toy.category}</th>
                                    <th>{toy.rating}</th>
                                    <th>{toy.quantity}</th>
                                    <th> <div className='w-[200px] whitespace-normal overflow-hidden'>{toy.details}</div> </th>
                                    <th>



                                        <button onClick={() => handleUpdate(toy._id)} className='btn'>
                                            <FaPen />
                                        </button>


                                        <button onClick={() => handleDelete(toy._id)} className='btn ml-2'>
                                            <FaTrashAlt />
                                        </button>

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

export default MyToys;