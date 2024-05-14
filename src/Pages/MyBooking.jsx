import 'reactjs-popup/dist/index.css';
import UpdateDate from "../components/UpdateDate";
import useUpateRoom from "../hooks/useUpateRoom";
import axios from 'axios';
import moment from 'moment';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { BallTriangle } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';


const MyBooking = () => {
    const [toDay, setStartDate] = useState(new Date());
    const { data, isPending, refetch } = useUpateRoom()


    if (isPending) {
        return <div className="h-[80vh] flex justify-center items-center">
             <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
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
        }).then(async (result) => {
            if (result.isConfirmed) {

                const dateB = moment(toDay);
                const dateC = moment(endDate);

                const remainingDay = dateC.diff(dateB, 'days')

                if (remainingDay >= 1) {
                    const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/deletemybookedlist/${id}`)
                    console.log(data)
                    refetch()
                    try {
                        const Availability = "Available"
                        const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/availability/${bookId}`, { Availability })
                        console.log(data)
                    } catch (error) {
                        console.log(error)
                    }
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
             <Helmet>
                <title>My Booking</title>
            </Helmet>
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

                                    <span >{room.bookSize} sq.ft</span>
                                </td>
                                <td>

                                    <span >${room.bookPrice}</span>
                                </td>
                                <td>

                                    <span >{new Date(room.startDate).toLocaleDateString()}</span>
                                </td>
                                <th className="flex gap-4">

                                    {/* delete booking*/}
                                    <button onClick={() => handelCancelRoom(room._id, room.bookId, room?.startDate)} className='bg-red-400 text-white rounded background-transparent font-bold uppercase px-6 py-1 text-sm '>Cancel</button>
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