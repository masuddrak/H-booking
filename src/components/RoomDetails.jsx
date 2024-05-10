import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {
    const loaderData = useLoaderData()
    console.log(loaderData.data)
    const { _id, images3, images2, images1, Availability, Price, Size, Description, Offers } = loaderData?.data || {}
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
                    <button className="bg-base-content px-2 py-1 text-white rounded-sm">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;