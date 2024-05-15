import { Link } from "react-router-dom";



const Room = ({ room }) => {
    const { _id,images3,Price,Offers} = room
    return (
        <Link to={`/room/${_id}`} data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="relative roomContainer rounded-md transition ease-in duration-500">
             
            <img className="rounded-md" src={images3} alt="" />
            <div className="imagoverlay">Per Night ${Price}</div>
            <p className="absolute top-3 right-0 bg-base-content text-white  px-3 py-2 rounded-l-md">{Offers}% Discount</p>
        </Link>
    );
};

export default Room;