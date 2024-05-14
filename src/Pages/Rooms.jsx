import { useEffect, useState } from "react";
import axios from "axios";
import Room from "../components/Room";
import { useLoaderData } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import { Helmet } from "react-helmet";


const Rooms = () => {
    const [rommsLoading, setRoomsLoading] = useState(true)
    const [rooms, setRooms] = useState([])
    const [pageItems, setPageItems] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)
    const { count } = useLoaderData()
    console.log(count)
    const pages = Math.ceil(count / pageItems)
    const totalPages = [...Array(pages).keys()]


    const handelPages = (e) => {
        console.log(e.target.value)
        const parsPage = parseInt(e.target.value)
        setPageItems(parsPage)
        setCurrentPage(0)
    }
    const handelPrev = () => {
        if (currentPage > 0)
            setCurrentPage(currentPage - 1)
    }
    const handelNext = () => {
        if (currentPage < totalPages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }
    useEffect(() => {
        const fackData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/allrooms?page=${currentPage}&size=${pageItems}`)

            setRooms(data)
            setRoomsLoading(false)
        }
        fackData()
    }, [currentPage, pageItems, setRoomsLoading])
    // search Price
    const handelSerarch = async (e) => {
        e.preventDefault()
        const minPrice = e.target.minPrice.value
        const maxPrice = e.target.maxPrice.value
        console.log(maxPrice, minPrice)

        const { data } = await axios(`${import.meta.env.VITE_API_URL}/searchroom?minPrice=${minPrice}&maxPrice=${maxPrice}`)
        setRooms(data)
        setRoomsLoading(false)
    }
    if (rommsLoading) {
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
    return (
        <div className="container mx-auto">
             <Helmet>
                <title>All Rooms</title>
            </Helmet>
            <div className="my-2 md:my-10">
                <form onSubmit={handelSerarch} className=" gap-4 grid grid-cols-3 w-full md:w-1/2  mx-auto items-center">
                    <div className="space-y-1 text-sm">
                        <input type="number" name="minPrice" placeholder="Minimum Price" required className="w-full px-2 outline-0 py-2 border-b-[1px] border-gray-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <input type="number" name="maxPrice" placeholder="Maximum Price" required className="w-full px-2 outline-0 py-2 border-b-[1px] border-gray-400" />
                    </div>
                    <div>
                        <input type="submit" value="search" className="bg-pink-500 text-white rounded background-transparent font-bold uppercase px-6 py-2 text-sm" />
                    </div>
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-2 md:mb-5">
                {
                    rooms.map(room => <Room key={room._id} room={room}></Room>)
                }
            </div>
            {/* pagination */}
            {
                rooms.length > 5 && <div className="flex justify-center my-4" >
                    <div className="space-x-3">
                        <button onClick={handelPrev} className=" border-1 border px-3">previus</button>
                        {
                            totalPages.map(page => <button className={currentPage == page ? "bg-pink-500 text-white px-4 mx-3" : "border-1 border  px-4 mx-3"} onClick={() => setCurrentPage(page)} key={page}>{page}</button>)
                        }
                        <select value={pageItems} onChange={handelPages} className="border border-1 outline-0" id="">
                            <option value="6">6</option>
                            <option value="10">10</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                        </select>
                        <button onClick={handelNext} className="border-1 border px-3">next</button>
                    </div>
                </div>

            }
        </div>
    );
};

export default Rooms;