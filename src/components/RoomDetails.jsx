import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
const RoomDetails = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const loaderData = useLoaderData()
    const { user } = useAuth()
    const { _id, images3, images2, images1, Availability, Price, Size, Description, Offers } = loaderData?.data || {}




    const heldelBook = (e) => {
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const bookId = _id
        const bookImage = images1
        const bookPrice = Price
        const bookSize = Size
        const Availability = "unavailable"
        const bookInfo = { email, bookId, bookImage, bookPrice, bookSize, startDate }
        try {
            const { data } = axios.patch(`${import.meta.env.VITE_API_URL}/availability/${_id}`, { Availability })
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        if (Availability==="unavailable") {
            return toast.warning("it`s Already Booked")
        }
        try {
            const { data } = axios.post(`${import.meta.env.VITE_API_URL}/bookrooms`, bookInfo)
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="container m-auto">
            <div className="grid grid-cols-3">
                <img className=" col-span-2 h-[50vh] w-full object-cover " src={images3} alt="" />
                <div className="h-[50vh] w-full">
                    <img className="h-1/2 object-cover w-full" src={images2} alt="" />
                    <img className="h-1/2 object-cover w-full" src={images1} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-5">
                <div className="col-span-2">
                    <p>{Description}</p>
                </div>
                <div className="shadow-lg rounded-lg p-4 space-y-1">
                    <p><span className="font-bold text-base-content">Price per Night: </span>${Price}</p>
                    <p><span className="font-bold text-base-content">Room Size: </span>{Size}</p>
                    <p><span className="font-bold text-base-content">Availabilit: </span>{Availability}</p>
                    <p><span className="font-bold text-base-content">Special Offers: </span>{Offers}</p>
                    {/*  */}
                    <div>
                        <button
                            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(true)}
                        >
                            Book Now
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
                                                    Room ID: {_id}
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
                                                <form onSubmit={heldelBook} className="space-y-3">
                                                    <div>
                                                        <p><span className="font-bold text-base-content">Price per Night: </span>${Price}</p>
                                                        <p><span className="font-bold text-base-content">Room Size: </span>{Size}</p>
                                                        <p><span className="font-bold text-base-content">Availabilit: </span>{Availability}</p>
                                                        <p><span className="font-bold text-base-content">Special Offers: </span>{Offers}</p>
                                                    </div>
                                                    <div className="space-y-1 text-sm">
                                                        <label htmlFor="Name" className="block text-white"> User Email</label>
                                                        <input type="email" name="email" defaultValue={user?.email} readOnly placeholder="User Email" className="w-full px-2 outline-0 py-4 border-b-[1px] border-gray-400" />
                                                    </div>
                                                    <div className="w-full">
                                                        <label htmlFor="Name" className="block text-base-content"> Select Date</label>
                                                        <DatePicker className="w-full px-2 outline-0 py-4 border-b-[1px] border-gray-400 mb-4" selected={startDate} onChange={(date) => setStartDate(date)} />
                                                    </div>
                                                    <input
                                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 absolute right-0"
                                                        type="submit"
                                                        // onClick={() => setShowModal(false)}
                                                        value="Book"
                                                    />

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
                    {/*  */}
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;