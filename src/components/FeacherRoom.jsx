import { Link } from "react-router-dom";


const FeacherRoom = ({ room }) => {
    const { _id, images3, Description, Price, Offers } = room
    return (
        <Link to={`/room/${_id}`} data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"  className="relative shadow-md roomContainer mx-2 md:mx-0 transition ease-in rounded-t-md duration-500">
            <img className="rounded-t-md " src={images3} alt="" />
            <div className="p-4 ">
                <p className="absolute top-3 right-0 bg-base-content text-white px-3 py-2 rounded-l-md">{Offers}% discount</p>
                <div>
                    <p className="text-gray-200 text-xl font-semibold">Per Night ${Price}</p>
                    <p className="text-gray-300">{Description.length > 200 ?
                        <p>{Description.slice(0, 150)}...</p> : Description
                    }</p>
                    <div  className="mt-3">
                        <Link to={`/room/${_id}`} className="bg-pink-500  text-white rounded background-transparent font-bold uppercase px-6 py-2 text-sm">Book Now!</Link>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FeacherRoom;