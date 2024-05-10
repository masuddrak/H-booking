import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const MyBooking = () => {
    const { user } = useAuth()
    const [bookingRooms, setBookingRooms] = useState([])
    useEffect(() => {
        const handelBookData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/mybookedlist/${user?.email}`)
            setBookingRooms(data)
        }
        handelBookData()
    }, [user])
    console.log(bookingRooms)
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
                            bookingRooms.map(room => <tr key={room._id}>
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
                                      
                                <span >{room.startDate}</span>
                                </td>
                                <th className="flex gap-4">
                                    <button className="bg-red-400 px-2 py-1 text-white rounded-sm">Cencel</button>
                                    <button className="bg-green-600 px-2 py-1 text-white rounded-sm">Update</button>
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