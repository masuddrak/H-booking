import { Link } from "react-router-dom";


const Room = ({ room }) => {
    const { _id,images3,Price} = room
    return (
        <Link to={`/room/${_id}`} className="relative roomContainer transition ease-in duration-500">
            <img src={images3} alt="" />
            <div className="imagoverlay">Per Night ${Price}</div>
            <p className="absolute top-3 right-0 bg-base-content text-white px-3 py-2 rounded-l-md">20% discount</p>
        </Link>
    );
};

export default Room;