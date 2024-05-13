import 'reactjs-popup/dist/index.css';
import UpdateDate from "../components/UpdateDate";
import useUpateRoom from "../hooks/useUpateRoom";
import axios from 'axios';
import moment from 'moment';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';


const MyBooking = () => {
    const [toDay, setStartDate] = useState(new Date());
    const { data, isPending, refetch } = useUpateRoom()


    if (isPending) {
        return <h1 className='text-4xl'>Loading..........</h1>
    }

    const handelCancelRoom = async (id, bookId, endDate) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                try {
                    const Availability = "Available"
                    const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/availability/${bookId}`, { Availability })
                    console.log(data)
                } catch (error) {
                    console.log(error)
                }
                const dateB = moment(toDay);
                const dateC = moment(endDate);

                const remainingDay = dateC.diff(dateB, 'days')

                if (remainingDay > 1) {
                    const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/deletemybookedlist/${id}`)
                    console.log(data)
                    refetch()
                }
                else {
                    return toast.warning(`Can Not cancel book ${toDay}`)
                }
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
        console.log(id)


    }

    return (

        <div className="container mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Room</th>
                            <th>Room Size</th>
                            <th>Price per Night</th>
                            <th>Bookig Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.map(room => <tr key={room._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask w-12 h-12">
                                            <img src={room.bookImage} alt="bookImage" />
                                        </div>
                                    </div>
                                </td>
                                <td>

                                    <span >{room.bookSize}sqb</span>
                                </td>
                                <td>

                                    <span >${room.bookPrice}</span>
                                </td>
                                <td>

                                    <span >{new Date(room.startDate).toLocaleDateString()}</span>
                                </td>
                                <th className="flex gap-4">

                                    {/* delete booking*/}
                                    <button onClick={() => handelCancelRoom(room._id, room.bookId, room?.startDate)} className='p-4 bg-red-400'>Cancel</button>
                                    {/* update booking */}

                                    <UpdateDate room={room} ></UpdateDate>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;