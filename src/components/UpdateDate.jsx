import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import useUpateRoom from "../hooks/useUpateRoom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const UpdateDate = ({ room }) => {
    const { user } = useAuth()
    const [startDate, setStartDate] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const { refetch } = useUpateRoom()
    const naviget=useNavigate()
    const upadateBooking = (e) => {
        e.preventDefault()

        console.log("updatte date", startDate)
        try {
            const { data } = axios.patch(`${import.meta.env.VITE_API_URL}/updatedate/${room._id}`, { startDate })
            refetch()
            toast.success("Update Your Date Success!")
        } catch (error) {
            console.log(error)
        }
        refetch()
    }
    return (
        <div>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Update Booking
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  "
                    >
                        <div className="relative w-auto my-6 mx-auto  max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg px-3 py-5  relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Room ID: {room._id}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <form onSubmit={upadateBooking}  className="space-y-3">

                                        <div className="space-y-1 text-sm">
                                            <label htmlFor="Name" className="block text-white"> User Email</label>
                                            <input type="email" name="email" defaultValue={user?.email} readOnly placeholder="User Email" className="w-full px-2 outline-0 py-4 border-b-[1px] border-gray-400" />
                                        </div>
                                        <div className="w-full">
                                            <label htmlFor="Name" className="block text-base-content"> Select Date</label>
                                            <ReactDatePicker className="w-full px-2 outline-0 py-4 border-b-[1px] border-gray-400 mb-4" defaultValue={room?.startDate}  selected={startDate} onChange={(date) => setStartDate(date)} />
                                        </div>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 absolute right-0"
                                         
                                            // onClick={() => setShowModal(false)}
                                          
                                        >Update</button>

                                    </form>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end  rounded-b pb-6">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 absolute left-0"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
};

export default UpdateDate;